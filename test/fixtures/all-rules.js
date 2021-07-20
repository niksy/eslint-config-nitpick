'use strict';

const path = require('path');

module.exports = {
	'extends': [
		'./',
		'./browser',
		'./next',
		'./tests',
		'./react',
		'./jsx',
		'./vue'
	].map((m) => {
		return require.resolve(path.resolve(process.cwd(), m));
	})
};
