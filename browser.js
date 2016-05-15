module.exports = {
	extends: [
		'./'
	].map(require.resolve),

	env: {
		node: false,
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
