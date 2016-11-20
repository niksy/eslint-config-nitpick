module.exports = {
	'extends': [
		'./'
	].map(require.resolve),

	env: {
		es6: true
	},

	rules: {

		// ES2015
		'constructor-super': 0,
		'generator-star-spacing': [2, {
			before: true,
			after: false
		}],
		'no-class-assign': 1,
		'no-dupe-class-members': 2,
		'no-this-before-super': 2,
		'object-shorthand': 0,
		'prefer-reflect': 0,
		'prefer-spread': 0,
		'require-yield': 1,
		'no-new-symbol': 2,
		'no-restricted-imports': 0,
		'no-useless-constructor': 1,
		'prefer-rest-params': 1,
		'sort-imports': 0,
		'symbol-description': 0,
		'yield-star-spacing': [1, 'after'],
		'no-duplicate-imports': 1,
		'no-useless-computed-key': 0,
		'no-useless-rename': 1,
		'rest-spread-spacing': [2, 'never'],
		'class-methods-use-this': 0,
		'prefer-numeric-literals': 0,
		'no-return-await': 2,

		// Best practices

		// Disable param reassignment since we can use default parameters
		'no-param-reassign': [1, {
			props: true
		}]
	}
};
