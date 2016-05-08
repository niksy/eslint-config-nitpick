module.exports = {
	extends: [
		'./'
	].map(require.resolve),

	env: {
		browser: true,
		commonjs: true
	},

	rules: {

		// Possible errors
		'no-console': 2,

		// Best practices
		'no-implicit-globals': 2
	}
};
