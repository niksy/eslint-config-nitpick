module.exports = {
	extends: [
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
		'no-arrow-condition': 1,
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
		'require-yield': 1
	}
};
