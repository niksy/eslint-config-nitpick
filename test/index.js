'use strict';

const path = require('path');
const assert = require('assert');
const isPlainObject = require('lodash/isPlainObject');
const { ESLint } = require('eslint');

async function runEslint(file, config) {
	const linter = new ESLint({
		useEslintrc: false,
		baseConfig: config
	});
	const [results] = await linter.lintFiles([path.join(__dirname, file)]);

	return results.messages.map((error) => {
		if (error.ruleId === null && error.fatal === true) {
			return 'parsing error';
		}
		return error.ruleId;
	});
}

describe('Config format', function () {
	const config = require('../');

	it('should have config objects which are plain objects', function () {
		assert.ok(isPlainObject(config));
		assert.ok(isPlainObject(config.env));
		assert.ok(isPlainObject(config.rules));
	});
});

describe('Default config', function () {
	it('should return proper validation errors for linted code', async function () {
		const errors = await runEslint('./fixtures/default.config.js', {
			extends: require.resolve('../')
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
			extends: ['../', '../browser'].map((entry) =>
				require.resolve(entry)
			)
		});
		assert.notEqual(errors.indexOf('no-console'), -1);
	});
});

describe('Next config', function () {
	it('should return proper validation errors for linted code', async function () {
		const errors = await runEslint('./fixtures/next.config.js', {
			extends: ['../', '../next'].map((entry) => require.resolve(entry))
		});
		assert.notEqual(errors.indexOf('import/exports-last'), -1);
		assert.notEqual(errors.indexOf('import/no-mutable-exports'), -1);
	});
});

describe('Tests config', function () {
	it('should return proper validation errors for linted code', async function () {
		const errors = await runEslint('./fixtures/tests.config.js', {
			extends: ['../', '../tests'].map((entry) => require.resolve(entry))
		});
		assert.notEqual(errors.indexOf('max-nested-callbacks'), -1);
		assert.notEqual(errors.indexOf('mocha/no-mocha-arrows'), -1);
		assert.equal(errors.indexOf('promise/always-return'), -1);
	});
});

describe('React config', function () {
	it('should return proper validation errors for linted code', async function () {
		const errors = await runEslint('./fixtures/react.config.js', {
			extends: ['../', '../react'].map((entry) => require.resolve(entry))
		});
		assert.notEqual(errors.indexOf('react/react-in-jsx-scope'), -1);
	});
});

describe('JSX config', function () {
	it('should return proper validation errors for linted code', async function () {
		const errors = await runEslint('./fixtures/jsx.config.js', {
			extends: ['../', '../jsx'].map((entry) => require.resolve(entry))
		});
		assert.notEqual(errors.indexOf('react/jsx-no-undef'), -1);
	});
});

describe('Vue config', function () {
	it('should return proper validation errors for linted code', async function () {
		const errors = await runEslint('./fixtures/vue.config.vue', {
			extends: ['../', '../vue'].map((entry) => require.resolve(entry))
		});
		assert.notEqual(errors.indexOf('vue/no-multiple-template-root'), -1);
		assert.notEqual(errors.indexOf('vue/script-indent'), -1);
	});
});

describe('TypeScript config', function () {
	it('should return proper validation errors for linted code', async function () {
		const errors = await runEslint('./fixtures/typescript.config.js', {
			extends: ['../', '../typescript'].map((entry) =>
				require.resolve(entry)
			)
		});
		assert.notEqual(errors.indexOf('jsdoc/check-line-alignment'), -1);
	});
});
