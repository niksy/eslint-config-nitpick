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
	it('should have base configuration defined', async function () {
		assert.ok(configBase.length === 2);
		assert.ok(isPlainObject(configBase[0]));
		assert.ok(isPlainObject(configBase[0].rules));
	});
});

describe('Default config', function () {
	it('should return proper validation errors for linted code, .js file', async function () {
		const errors = await runEslint('./fixtures/default.config.js', defineConfig(configBase));
		assert.ok(errors.includes('quotes'));
		assert.ok(errors.includes('semi'));
		assert.ok(errors.includes('promise/param-names'));
		assert.ok(errors.includes('unicorn/throw-new-error'));
		assert.ok(errors.includes('no-const-assign'));
		assert.ok(errors.includes('prefer-template'));
		assert.ok(errors.includes('rest-spread-spacing'));
	});

	it('should return proper validation errors for linted code, .cjs file', async function () {
		const errors = await runEslint('./fixtures/default.config.cjs', defineConfig(configBase));
		assert.ok(!errors.includes('import/no-commonjs'));
	});
});

describe('Browser config', function () {
	it('should return proper validation errors for linted code', async function () {
		const errors = await runEslint(
			'./fixtures/browser.config.js',
			defineConfig([configBase, configBrowser])
		);
		assert.ok(errors.includes('no-undef'));
		assert.ok(errors.includes('no-console'));
	});
});

describe('Tests config', function () {
	it('should return proper validation errors for linted code', async function () {
		const errors = await runEslint(
			'./fixtures/tests.config.js',
			defineConfig([configBase, configTest])
		);
		assert.ok(errors.includes('max-nested-callbacks'));
		assert.ok(errors.includes('mocha/no-mocha-arrows'));
		assert.ok(!errors.includes('promise/always-return'));
	});
});

describe('Vue config', function () {
	it('should return proper validation errors for linted code', async function () {
		const errors = await runEslint(
			'./fixtures/vue.config.vue',
			defineConfig([configBase, configVue])
		);
		assert.ok(errors.includes('vue/no-multiple-template-root'));
		assert.ok(errors.includes('vue/script-indent'));
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
