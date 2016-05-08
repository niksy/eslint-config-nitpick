var assert = require('assert');
var isPlainObject = require('lodash/isPlainObject');
var eslint = require('eslint');

function runEslint ( code, configFile ) {
	var linter = new eslint.CLIEngine({
		useEslintrc: false,
		configFile: require.resolve(configFile)
	});
	return linter.executeOnText(code).results[0].messages;
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
		var errors = runEslint('console.log("foobar")\n', '../');
		assert.equal(errors[0].ruleId, 'quotes');
		assert.equal(errors[1].ruleId, 'semi');
	});

	it('eslint-plugin-promise is applied', function () {
		var errors = runEslint('var p = new Promise(function ( r1, r2 ) {})\n', '../');
		assert.equal(errors[1].ruleId, 'promise/param-names');
	});

});

describe('ES2015 config', function () {

	it('linted code should return proper validation errors', function () {
		var errors = runEslint('var foo = x => x;\nconsole.log("foobar")\n', '../es2015');
		assert.equal(errors[0].ruleId, 'no-unused-vars');
		assert.equal(errors[1].ruleId, 'arrow-parens');
		assert.equal(errors[2].ruleId, 'arrow-body-style');
		assert.equal(errors[3].ruleId, 'quotes');
		assert.equal(errors[4].ruleId, 'semi');
	});

});

describe('Browser config', function () {

	it('linted code should return proper validation errors', function () {
		var errors = runEslint('console.log("foobar")\n', '../browser');
		assert.equal(errors[0].ruleId, 'no-console');
		assert.equal(errors[1].ruleId, 'quotes');
		assert.equal(errors[2].ruleId, 'semi');
	});

});
