'use strict';

module.exports = {
	parserOptions: {
		ecmaVersion: 2022,
		sourceType: 'module'
	},

	plugins: ['eslint-plugin-import'],

	rules: {
		'prefer-object-spread': 1,
		'prefer-named-capture-group': 1,
		'no-unused-private-class-members': 1,
		'prefer-object-has-own': 1,
		'unicorn/prefer-object-has-own': 1,
		'unicorn/prefer-at': 1,
		'unicorn/prefer-object-from-entries': 1,
		'unicorn/prefer-top-level-await': 0,

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
		'import/order': [1, { 'newlines-between': 'never' }],
		'import/prefer-default-export': 1,
		'import/no-unassigned-import': 1,
		'import/group-exports': 1,
		'import/dynamic-import-chunkname': 2,
		'import/no-import-module-exports': 2,
		'import/no-relative-packages': 0,
		'import/no-unresolved': 0,
		'import/named': 0,
		'import/default': 0,
		'import/namespace': 0,
		'import/no-restricted-paths': 0,
		'import/no-internal-modules': 0,
		'import/no-cycle': 0,
		'import/no-useless-path-segments': 0,
		'import/no-relative-parent-imports': 0,
		'import/no-named-as-default': 0,
		'import/no-named-as-default-member': 0,
		'import/no-deprecated': 0,
		'import/no-extraneous-dependencies': 0,
		'import/unambiguous': 0,
		'import/no-nodejs-modules': 0,
		'import/first': 0,
		'import/no-duplicates': 0,
		'import/newline-after-import': 0,
		'import/max-dependencies': 0,
		'import/no-named-default': 0,
		'import/no-default-export': 0,
		'import/no-anonymous-default-export': 0,
		'import/no-named-export': 0,
		'import/no-unused-modules': 0,
		'unicorn/prefer-export-from': 0,
		'unicorn/prefer-module': 1,
		'node/file-extension-in-import': [2, 'always'],
		'import/extensions': [2, 'always', { ignorePackages: true }]
	}
};
