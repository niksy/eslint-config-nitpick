// We want to use subset from ES2015
// This can be removed when "es2015" is used in full capacity

module.exports = {

	parserOptions: {
		ecmaVersion: 6
	},

	globals: {
		'Promise': false
	},

	plugins: [
		'promise',
		'node'
	],

	rules: {
		'promise/always-catch': 1, // Deprecated
		'promise/catch-or-return': 1,
		'promise/always-return': 2,
		'promise/param-names': 2,
		'promise/no-native': 0,

		'node/no-unsupported-features': [2, {
			version: 4
		}],

		'arrow-body-style': [2, 'always'],
		'arrow-parens': [2, 'always'],
		'arrow-spacing': [2, {
			before: true,
			after: true
		}],
		'no-confusing-arrow': 1,
		'no-const-assign': 2,
		'no-var': 0,
		'prefer-arrow-callback': 0,
		'prefer-const': 0,
		'prefer-template': 1,
		'template-curly-spacing': [2, 'never'],
		'no-template-curly-in-string': 1
	}
};
