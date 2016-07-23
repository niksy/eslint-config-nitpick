module.exports = {
	'extends': [
		'./'
	].map(require.resolve),

	env: {
		mocha: true
	},

	rules: {

		'promise/always-return': 0,

		// Stylistic issues
		'max-nested-callbacks': [1, 5]
	}
};
