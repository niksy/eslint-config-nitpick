'use strict';

const path = require('path');
const assert = require('assert');
const isPlainObject = require('lodash/isPlainObject');
const eslint = require('eslint');
const _ = require('lodash');

function runEslint(file, config) {
	const linter = new eslint.CLIEngine({
		useEslintrc: false,
		baseConfig: config
	});
	return linter
		.executeOnFiles([path.join(__dirname, file)])
		.results[0].messages.map((error) => {
			if (error.ruleId === null && error.fatal === true) {
				return 'parsing error';
			}
			return error.ruleId;
		});
}

describe('Dependencies', function () {
	it('should have all "dependencies" defined in "peerDependencies"', function () {
		const package_ = require('../package.json');

		assert.deepStrictEqual(
			_.omit(package_.devDependencies, [
				'eslint',
				'eslint-find-rules',
				'lodash',
				'mocha',
				'np',
				'prettier',
				'eslint-plugin-prettier',
				'eslint-config-prettier',
				'husky',
				'lint-staged'
			]),
			package_.peerDependencies
		);
	});
});

describe('Config format', function () {
	const config = require('../');

	it('should have config objects which are plain objects', function () {
		assert.ok(isPlainObject(config));
		assert.ok(isPlainObject(config.env));
		assert.ok(isPlainObject(config.rules));
	});
});

describe('Default config', function () {
	it('should return proper validation errors for linted code', function () {
		const errors = runEslint('./fixtures/default.config.js', {
			extends: require.resolve('../')
		});
		const errorsNonStrict = runEslint(
			'./fixtures/default-non-strict.config.js',
			{
				extends: require.resolve('../')
			}
		);
		assert.notEqual(errors.indexOf('quotes'), -1);
		assert.notEqual(errors.indexOf('semi'), -1);
		assert.notEqual(errors.indexOf('promise/param-names'), -1);
		assert.notEqual(
			errors.indexOf('extend/no-unsafe-extend-inside-call'),
			-1
		);
		assert.notEqual(
			errors.indexOf('extend/no-unsafe-extend-inside-assignment'),
			-1
		);
		assert.notEqual(errors.indexOf('unicorn/throw-new-error'), -1);
		assert.notEqual(errors.indexOf('no-const-assign'), -1);
		assert.notEqual(errors.indexOf('prefer-template'), -1);
		assert.notEqual(errors.indexOf('rest-spread-spacing'), -1);
		assert.notEqual(errorsNonStrict.indexOf('parsing error'), -1);
	});
});

describe('Browser config', function () {
	it('should return proper validation errors for linted code', function () {
		const errors = runEslint('./fixtures/browser.config.js', {
			extends: ['../', '../browser'].map((entry) =>
				require.resolve(entry)
			)
		});
		assert.notEqual(errors.indexOf('no-console'), -1);
	});
});

describe('Next config', function () {
	it('should return proper validation errors for linted code', function () {
		const errors = runEslint('./fixtures/next.config.js', {
			extends: ['../', '../next'].map((entry) => require.resolve(entry))
		});
		assert.notEqual(errors.indexOf('import/exports-last'), -1);
		assert.notEqual(errors.indexOf('import/no-mutable-exports'), -1);
	});
});

describe('Tests config', function () {
	it('should return proper validation errors for linted code', function () {
		const errors = runEslint('./fixtures/tests.config.js', {
			extends: ['../', '../tests'].map((entry) => require.resolve(entry))
		});
		assert.notEqual(errors.indexOf('max-nested-callbacks'), -1);
		assert.notEqual(errors.indexOf('mocha/no-mocha-arrows'), -1);
		assert.equal(errors.indexOf('promise/always-return'), -1);
	});
});

describe('React config', function () {
	it('should return proper validation errors for linted code', function () {
		const errors = runEslint('./fixtures/react.config.js', {
			extends: ['../', '../react'].map((entry) => require.resolve(entry))
		});
		assert.notEqual(errors.indexOf('react/react-in-jsx-scope'), -1);
	});
});

describe('JSX config', function () {
	it('should return proper validation errors for linted code', function () {
		const errors = runEslint('./fixtures/jsx.config.js', {
			extends: ['../', '../jsx'].map((entry) => require.resolve(entry))
		});
		assert.notEqual(errors.indexOf('react/jsx-no-undef'), -1);
	});
});

describe('Vue config', function () {
	it('should return proper validation errors for linted code', function () {
		const errors = runEslint('./fixtures/vue.config.vue', {
			extends: ['../', '../vue'].map((entry) => require.resolve(entry))
		});
		assert.notEqual(errors.indexOf('vue/no-multiple-template-root'), -1);
		assert.notEqual(errors.indexOf('vue/script-indent'), -1);
	});
});

describe('TypeScript config', function () {
	it('should return proper validation errors for linted code', function () {
		const errors = runEslint('./fixtures/typescript.config.js', {
			extends: ['../', '../typescript'].map((entry) =>
				require.resolve(entry)
			)
		});
		assert.notEqual(errors.indexOf('jsdoc/check-line-alignment'), -1);
		assert.notEqual(errors.indexOf('jsdoc/check-syntax'), -1);
	});
});
