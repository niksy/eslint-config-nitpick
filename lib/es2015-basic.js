// We want to use subset from ES2015
// This can be removed when "es2015" is used in full capacity

module.exports = {

	globals: {
		'Promise': false
	},

	plugins: [
		'promise'
	],

	rules: {
		'promise/always-catch': 1, // Deprecated
		'promise/catch-or-return': 1,
		'promise/always-return': 2,
		'promise/param-names': 2,
	}
};
