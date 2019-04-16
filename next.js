'use strict';

module.exports = {

	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module'
	},

	plugins: ['import'],

	rules: {

		'prefer-object-spread': 1,
		'prefer-named-capture-group': 1,

		// "import" and "require"
		'import/no-absolute-path': 2,
		'import/no-dynamic-require': 2,
		'import/no-webpack-loader-syntax': 2,
		'import/no-self-import': 2,
		'import/export': 2,
		'import/no-mutable-exports': 2,
		'import/no-commonjs': 1,
		'import/no-amd': 1,
		'import/exports-last': 2,
		'import/no-namespace': 1,
		'import/order': [ 1, { 'newlines-between': 'never' }],
		'import/prefer-default-export': 1,
		'import/no-unassigned-import': 1,
		'import/group-exports': 1,
		'import/dynamic-import-chunkname': 2
	}
};
