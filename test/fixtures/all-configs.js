'use strict';

const path = require('path');

module.exports = {
	'extends': [
		'./',
		'./es2015',
		'./browser'
	].map(( m ) => {
		return require.resolve(path.resolve(process.cwd(), m));
	}),

	// Plugin packs can contain many rules, but sometimes you only want to use
	// one rule and ignore all the rest (e.g. for eslint-plugin-node use only
	// node/no-unsupported-features). Here you can define all rules you want to
	// ignore.
	rules: {
		'node/no-deprecated-api': 0,
		'node/no-missing-import': 0,
		'node/no-missing-require': 0,
		'node/no-unpublished-import': 0,
		'node/no-unpublished-require': 0,
		'node/no-unpublished-bin': 0,
		'node/shebang': 0,
		'node/no-hide-core-modules': 0,

		'unicorn/escape-case': 0,
		'unicorn/no-abusive-eslint-disable': 0,
		'unicorn/no-hex-escape': 0,
		'unicorn/number-literal-case': 0,
		'unicorn/prefer-starts-ends-with': 0
	}
};
