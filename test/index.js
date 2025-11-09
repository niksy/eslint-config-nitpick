import assert from 'node:assert';
import { fileURLToPath } from 'node:url';
import isPlainObject from 'lodash/isPlainObject.js';
import { ESLint } from 'eslint';
import { defineConfig } from 'eslint/config';
import configBase from '../index.js';
import configBrowser from '../browser.js';
import configTest from '../tests.js';
import configVue from '../vue.js';
import configTypescript from '../typescript.js';

async function runEslint(file, config) {
	const linter = new ESLint({
		overrideConfigFile: true,
		overrideConfig: config
	});
	const [results] = await linter.lintFiles(fileURLToPath(new URL(file, import.meta.url)));

	return results.messages.map((error) => {
		if (error.ruleId === null && error.fatal === true) {
			return error.message ?? 'Parsing error';
		}
		return error.ruleId;
	});
}

describe('Config format', function () {
	it('should have config objects which are plain objects', async function () {
		assert.ok(configBase.length === 1);
		assert.ok(isPlainObject(configBase[0]));
		assert.ok(isPlainObject(configBase[0].rules));
	});
});

describe('Default config', function () {
	it('should return proper validation errors for linted code', async function () {
		const errors = await runEslint('./fixtures/default.config.js', defineConfig(configBase));
		assert.notEqual(errors.indexOf('quotes'), -1);
		assert.notEqual(errors.indexOf('semi'), -1);
		assert.notEqual(errors.indexOf('promise/param-names'), -1);
		assert.notEqual(errors.indexOf('unicorn/throw-new-error'), -1);
		assert.notEqual(errors.indexOf('no-const-assign'), -1);
		assert.notEqual(errors.indexOf('prefer-template'), -1);
		assert.notEqual(errors.indexOf('rest-spread-spacing'), -1);
	});
});

describe('Browser config', function () {
	it('should return proper validation errors for linted code', async function () {
		const errors = await runEslint(
			'./fixtures/browser.config.js',
			defineConfig([configBase, configBrowser])
		);
		assert.notEqual(errors.indexOf('no-undef'), -1);
		assert.notEqual(errors.indexOf('no-console'), -1);
	});
});

describe('Tests config', function () {
	it('should return proper validation errors for linted code', async function () {
		const errors = await runEslint(
			'./fixtures/tests.config.js',
			defineConfig([configBase, configTest])
		);
		assert.notEqual(errors.indexOf('max-nested-callbacks'), -1);
		assert.notEqual(errors.indexOf('mocha/no-mocha-arrows'), -1);
		assert.equal(errors.indexOf('promise/always-return'), -1);
	});
});

describe('Vue config', function () {
	it('should return proper validation errors for linted code', async function () {
		const errors = await runEslint(
			'./fixtures/vue.config.vue',
			defineConfig([configBase, configVue])
		);
		assert.notEqual(errors.indexOf('vue/no-multiple-template-root'), -1);
		assert.notEqual(errors.indexOf('vue/script-indent'), -1);
	});
});

describe('TypeScript config', function () {
	it('should return proper validation errors for linted code, .js file', async function () {
		const errors = await runEslint(
			'./fixtures/typescript.config.js',
			defineConfig([configBase, configTypescript])
		);
		assert.ok(errors.includes('no-unused-vars'));
	});

	it('should return proper validation errors for linted code, .ts file', async function () {
		const errors = await runEslint(
			'./fixtures/typescript.config.ts',
			defineConfig([configBase, configTypescript])
		);
		assert.ok(errors.includes('no-unused-vars'));
	});
});
