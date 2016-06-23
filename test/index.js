var assert = require('assert');
var isPlainObject = require('lodash/isPlainObject');
var eslint = require('eslint');

function runEslint ( code, configFile ) {
	var linter = new eslint.CLIEngine({
		useEslintrc: false,
		configFile: require.resolve(configFile)
	});
	return linter.executeOnText(code).results[0].messages.map(function ( err ) {
		return err.ruleId;
	});
}

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
		var errors = runEslint('console.log("foobar")\nvar p = new Promise(function ( r1, r2 ) {})\n', '../');
		assert.notEqual(errors.indexOf('quotes'), -1);
		assert.notEqual(errors.indexOf('semi'), -1);
		assert.notEqual(errors.indexOf('promise/param-names'), -1);
	});

});

describe('ES2015 config', function () {

	it('linted code should return proper validation errors', function () {
		var errors = runEslint('var foo = x => x;\nconsole.log("foobar")\n', '../es2015');
		assert.notEqual(errors.indexOf('no-unused-vars'), -1);
		assert.notEqual(errors.indexOf('arrow-parens'), -1);
		assert.notEqual(errors.indexOf('arrow-body-style'), -1);
		assert.notEqual(errors.indexOf('quotes'), -1);
		assert.notEqual(errors.indexOf('semi'), -1);
	});

});

describe('Browser config', function () {

	it('linted code should return proper validation errors', function () {
		var errors = runEslint('console.log("foobar")\n', '../browser');
		assert.notEqual(errors.indexOf('no-console'), -1);
		assert.notEqual(errors.indexOf('quotes'), -1);
		assert.notEqual(errors.indexOf('semi'), -1);
	});

});
