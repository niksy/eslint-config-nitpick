import assert from 'node:assert';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import isPlainObject from 'lodash/isPlainObject.js';
import { ESLint } from 'eslint';

async function runEslint(file, config) {
	const linter = new ESLint({
		useEslintrc: false,
		baseConfig: config
	});
	const [results] = await linter.lintFiles([
		fileURLToPath(new URL(file, import.meta.url))
	]);

	return results.messages.map((error) => {
		if (error.ruleId === null && error.fatal === true) {
			return error.message ?? 'Parsing error';
		}
		return error.ruleId;
	});
}

describe('Config format', function () {
	const require = createRequire(import.meta.url);
	const config = require('../index.js');

	it('should have config objects which are plain objects', function () {
		assert.ok(isPlainObject(config));
		assert.ok(isPlainObject(config.env));
		assert.ok(isPlainObject(config.rules));
	});
});

describe('Default config', function () {
	it('should return proper validation errors for linted code', async function () {
		const errors = await runEslint('./fixtures/default.config.js', {
			extends: fileURLToPath(new URL('../index.js', import.meta.url))
		});
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
		const errors = await runEslint('./fixtures/browser.config.js', {
			extends: ['../index.js', '../browser.js'].map((entry) =>
				fileURLToPath(new URL(entry, import.meta.url))
			)
		});
		assert.notEqual(errors.indexOf('no-console'), -1);
	});
});

describe('Tests config', function () {
	it('should return proper validation errors for linted code', async function () {
		const errors = await runEslint('./fixtures/tests.config.js', {
			extends: ['../index.js', '../tests.js'].map((entry) =>
				fileURLToPath(new URL(entry, import.meta.url))
			)
		});
		assert.notEqual(errors.indexOf('max-nested-callbacks'), -1);
		assert.notEqual(errors.indexOf('mocha/no-mocha-arrows'), -1);
		assert.equal(errors.indexOf('promise/always-return'), -1);
	});
});

describe('Vue config', function () {
	it('should return proper validation errors for linted code', async function () {
		const errors = await runEslint('./fixtures/vue.config.vue', {
			extends: ['../index.js', '../vue.js'].map((entry) =>
				fileURLToPath(new URL(entry, import.meta.url))
			)
		});
		assert.notEqual(errors.indexOf('vue/no-multiple-template-root'), -1);
		assert.notEqual(errors.indexOf('vue/script-indent'), -1);
	});
});

describe('TypeScript config', function () {
	it('should return proper validation errors for linted code', async function () {
		const errors = await runEslint('./fixtures/typescript.config.js', {
			extends: ['../index.js', '../typescript.js'].map((entry) =>
				fileURLToPath(new URL(entry, import.meta.url))
			)
		});
		assert.notEqual(errors.length, 0);
	});
});
