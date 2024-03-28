'use strict';

const path = require('path');

module.exports = {
	'extends': [
		'./index.js',
		'./browser.js',
		'./tests.js',
		'./vue.js',
		'./typescript.js'
	].map((m) => {
		return require.resolve(path.resolve(process.cwd(), m));
	})
};
