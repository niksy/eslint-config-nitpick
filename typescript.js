import pluginJsdoc from 'eslint-plugin-jsdoc';

export default {
	plugins: {
		jsdoc: pluginJsdoc
	},
	settings: {
		jsdoc: {
			mode: 'typescript'
		}
	},
	rules: {
		'jsdoc/require-returns': 0,
		'jsdoc/require-throws': 0,
		'jsdoc/require-hyphen-before-param-description': 0,
		'jsdoc/check-syntax': 0
	}
};
