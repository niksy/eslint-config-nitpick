var fs = require('fs');
var path = require('path');
var assert = require('assert');
var isPlainObject = require('lodash/isPlainObject');
var eslint = require('eslint');

function runEslint ( file, configFile ) {
	var linter = new eslint.CLIEngine({
		useEslintrc: false,
		configFile: require.resolve(configFile)
	});
	return linter.executeOnText(fs.readFileSync(path.join(__dirname, file), 'utf8')).results[0].messages.map(function ( err ) {
		return err.ruleId;
	});
}

describe('Dependencies', function () {

	it('all "dependencies" are defined in "peerDependencies"', function () {
		var pkg = require('../package.json');
		assert.deepStrictEqual(pkg.dependencies, pkg.peerDependencies);
	});

});

describe('Config format', function () {

	var config = require('../');

	it('config objects should be plain objects', function () {
		assert.ok(isPlainObject(config));
		assert.ok(isPlainObject(config.env));
		assert.ok(isPlainObject(config.rules));
	});

});

describe('Default config', function () {

	it('linted code should return proper validation errors', function () {
		var errors = runEslint('./fixtures/default-config.js', '../');
		assert.notEqual(errors.indexOf('quotes'), -1);
		assert.notEqual(errors.indexOf('semi'), -1);
		assert.notEqual(errors.indexOf('promise/param-names'), -1);
		assert.notEqual(errors.indexOf('extend/no-unsafe-extend-inside-call'), -1);
		assert.notEqual(errors.indexOf('extend/no-unsafe-extend-inside-assignment'), -1);
		assert.notEqual(errors.indexOf('new-with-error/new-with-error'), -1);
	});

});

describe('ES2015 config', function () {

	it('linted code should return proper validation errors', function () {
		var errors = runEslint('./fixtures/es2015-config.js', '../es2015');
		assert.notEqual(errors.indexOf('no-unused-vars'), -1);
		assert.notEqual(errors.indexOf('arrow-parens'), -1);
		assert.notEqual(errors.indexOf('arrow-body-style'), -1);
		assert.notEqual(errors.indexOf('quotes'), -1);
		assert.notEqual(errors.indexOf('semi'), -1);
	});

});

describe('Browser config', function () {

	it('linted code should return proper validation errors', function () {
		var errors = runEslint('./fixtures/browser-config.js', '../browser');
		assert.notEqual(errors.indexOf('no-console'), -1);
		assert.notEqual(errors.indexOf('quotes'), -1);
		assert.notEqual(errors.indexOf('semi'), -1);
	});

});
