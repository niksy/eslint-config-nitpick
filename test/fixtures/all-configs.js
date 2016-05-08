var path = require('path');

module.exports = {
	extends: [
		'./',
		'./es2015',
		'./browser'
	].map(function ( m ) {
		return require.resolve(path.resolve(process.cwd(), m));
	})
};
