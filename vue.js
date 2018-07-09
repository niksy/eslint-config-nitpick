'use strict';

const path = require('path');
const resolveFrom = require('resolve-from');

module.exports = {

	parser: resolveFrom(path.dirname(require.resolve('eslint-plugin-vue')), 'vue-eslint-parser'),

	'extends': require.resolve('./lib/jsx'),

	parserOptions: {
		parser: 'babel-eslint',
		sourceType: 'module'
	},

	plugins: ['vue'],

	rules: {

		// Other
		'no-param-reassign': [
			1,
			{
				props: true,
				ignorePropertyModificationsFor: ['state']
			}
		],

		// Base rules
		'vue/comment-directive': 2,
		'vue/jsx-uses-vars': 2,

		// Essential
		'vue/no-async-in-computed-properties': 2,
		'vue/no-dupe-keys': 2,
		'vue/no-duplicate-attributes': [2, { allowCoexistClass: true, allowCoexistStyle: true }],
		'vue/no-parsing-error': 2,
		'vue/no-reserved-keys': 2,
		'vue/no-shared-component-data': 2,
		'vue/no-side-effects-in-computed-properties': 2,
		'vue/no-template-key': 2,
		'vue/no-textarea-mustache': 2,
		'vue/no-unused-vars': 1,
		'vue/require-component-is': 2,
		'vue/require-render-return': 2,
		'vue/require-v-for-key': 2,
		'vue/require-valid-default-prop': 2,
		'vue/return-in-computed-property': 2,
		'vue/valid-template-root': 2,
		'vue/valid-v-bind': 2,
		'vue/valid-v-cloak': 2,
		'vue/valid-v-else-if': 2,
		'vue/valid-v-else': 2,
		'vue/valid-v-for': 2,
		'vue/valid-v-html': 2,
		'vue/valid-v-if': 2,
		'vue/valid-v-model': 2,
		'vue/valid-v-on': 2,
		'vue/valid-v-once': 2,
		'vue/valid-v-pre': 2,
		'vue/valid-v-show': 2,
		'vue/valid-v-text': 2,

		// Strongly recommended
		'vue/attribute-hyphenation': [2, 'never'],
		'vue/html-end-tags': 2,
		'vue/html-indent': [2, 'tab'],
		'vue/html-self-closing': [
			2,
			{
				html: {
					'void': 'always',
					normal: 'never',
					component: 'always'
				},
				svg: 'always',
				math: 'always'
			}
		],
		'vue/max-attributes-per-line': [
			2,
			{
				singleline: 3,
				multiline: {
					max: 1,
					allowFirstLine: false
				}
			}
		],
		'vue/mustache-interpolation-spacing': [2, 'always'],
		'vue/name-property-casing': [2, 'PascalCase'],
		'vue/no-multi-spaces': 2,
		'vue/require-default-prop': 1,
		'vue/require-prop-types': 1,
		'vue/v-bind-style': [2, 'shorthand'],
		'vue/v-on-style': [2, 'shorthand'],

		// Recommended
		'vue/attributes-order': 2,
		'vue/html-quotes': [2, 'double'],
		'vue/no-confusing-v-for-v-if': 2,
		'vue/order-in-components': 2,
		'vue/this-in-template': [1, 'never'], // TODO: review later

		// Uncategorized
		'vue/html-closing-bracket-newline': [
			2,
			{
				singleline: 'never',
				multiline: 'always'
			}
		],
		'vue/html-closing-bracket-spacing': [
			2,
			{
				startTag: 'never',
				endTag: 'never',
				selfClosingTag: 'always'
			}
		],
		'vue/prop-name-casing': [2, 'camelCase'],
		'vue/script-indent': [
			2,
			'tab',
			{
				baseIndent: 1,
				switchCase: 1
			}
		]

	},

	overrides: [
		{
			files: ['*.vue'],
			rules: {
				indent: 0
			}
		}
	]

};
