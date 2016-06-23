module.exports = {
	'extends': [
		'./'
	].map(require.resolve),

	env: {
		mocha: true
	},

	rules: {

		// Stylistic issues
		'max-nested-callbacks': [1, 5]
	}
};
