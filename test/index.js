'use strict';

const fs = require('fs');
const path = require('path');
const assert = require('assert');
const isPlainObject = require('lodash/isPlainObject');
const eslint = require('eslint');

function runEslint ( file, configFile ) {
	const linter = new eslint.CLIEngine({
		useEslintrc: false,
		configFile: require.resolve(configFile)
	});
	return linter.executeOnText(fs.readFileSync(path.join(__dirname, file), 'utf8')).results[0].messages.map(( err ) => {
		if ( err.ruleId === null && err.fatal === true ) {
			return 'parsing error';
		}
		return err.ruleId;
	});
}

describe('Dependencies', function () {

	it('should have all "dependencies" defined in "peerDependencies"', function () {
		const pkg = require('../package.json');
		assert.deepStrictEqual(pkg.dependencies, pkg.peerDependencies);
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
		const errors = runEslint('./fixtures/default-config.js', '../');
		const errorsNonStrict = runEslint('./fixtures/default-config-non-strict.js', '../');
		assert.notEqual(errors.indexOf('quotes'), -1);
		assert.notEqual(errors.indexOf('semi'), -1);
		assert.notEqual(errors.indexOf('promise/param-names'), -1);
		assert.notEqual(errors.indexOf('extend/no-unsafe-extend-inside-call'), -1);
		assert.notEqual(errors.indexOf('extend/no-unsafe-extend-inside-assignment'), -1);
		assert.notEqual(errors.indexOf('unicorn/throw-new-error'), -1);
		assert.notEqual(errors.indexOf('no-const-assign'), -1);
		assert.notEqual(errors.indexOf('prefer-template'), -1);
		assert.notEqual(errors.indexOf('node/no-unsupported-features'), -1);
		assert.notEqual(errorsNonStrict.indexOf('parsing error'), -1);
	});

});

describe('Browser config', function () {

	it('should return proper validation errors for linted code', function () {
		const errors = runEslint('./fixtures/browser-config.js', '../browser');
		assert.notEqual(errors.indexOf('no-console'), -1);
		assert.notEqual(errors.indexOf('quotes'), -1);
		assert.notEqual(errors.indexOf('semi'), -1);
	});

});

describe('ES2015 config', function () {

	it('should return proper validation errors for linted code', function () {
		const errors = runEslint('./fixtures/es2015-config.js', '../es2015');
		assert.notEqual(errors.indexOf('no-unused-vars'), -1);
		assert.notEqual(errors.indexOf('arrow-parens'), -1);
		assert.notEqual(errors.indexOf('arrow-body-style'), -1);
		assert.notEqual(errors.indexOf('quotes'), -1);
		assert.notEqual(errors.indexOf('semi'), -1);
	});

});

describe('Tests config', function () {

	it('should return proper validation errors for linted code', function () {
		const errors = runEslint('./fixtures/tests-config.js', '../tests');
		assert.notEqual(errors.indexOf('max-nested-callbacks'), -1);
		assert.notEqual(errors.indexOf('mocha/no-mocha-arrows'), -1);
		assert.equal(errors.indexOf('promise/always-return'), -1);
	});

});
