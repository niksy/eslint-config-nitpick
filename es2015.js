module.exports = {
	'extends': [
		'./'
	].map(require.resolve),

	env: {
		es6: true
	},

	rules: {

		// ES2015
		'arrow-body-style': [2, 'always'],
		'arrow-parens': [2, 'always'],
		'arrow-spacing': [2, {
			'before': true,
			'after': true
		}],
		'constructor-super': 0,
		'generator-star-spacing': [2, {
			'before': true,
			'after': false
		}],
		'no-confusing-arrow': 1,
		'no-class-assign': 1,
		'no-const-assign': 2,
		'no-dupe-class-members': 2,
		'no-this-before-super': 2,
		'no-var': 0,
		'object-shorthand': 0,
		'prefer-arrow-callback': 0,
		'prefer-const': 0,
		'prefer-reflect': 0,
		'prefer-spread': 0,
		'prefer-template': 0,
		'require-yield': 1,
		'no-new-symbol': 2,
		'no-restricted-imports': 0,
		'no-useless-constructor': 1,
		'prefer-rest-params': 1,
		'sort-imports': 0,
		'template-curly-spacing': [1, 'never'],
		'yield-star-spacing': [1, 'after'],
		'no-duplicate-imports': 1,
		'no-useless-computed-key': 0
	}
};
