'use strict';

const path = require('path');
const resolveFrom = require('resolve-from');

module.exports = {
	parser: resolveFrom(
		path.dirname(require.resolve('eslint-plugin-vue')),
		'vue-eslint-parser'
	),

	parserOptions: {
		sourceType: 'module'
	},

	plugins: ['eslint-plugin-vue'],

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

		// Extension rules
		'vue/no-loss-of-precision': 1,
		'vue/array-bracket-newline': [1, 'consistent'],
		'vue/comma-spacing': [
			2,
			{
				before: false,
				after: true
			}
		],
		'vue/comma-style': [2, 'last'],
		'vue/dot-notation': 1,
		'vue/func-call-spacing': [2, 'never'],
		'vue/max-len': 0,
		'vue/no-extra-parens': 0,
		'vue/no-irregular-whitespace': 2,
		'vue/no-sparse-arrays': 2,
		'vue/no-useless-concat': 1,
		'vue/object-curly-newline': [
			1,
			{
				consistent: true
			}
		],
		'vue/object-property-newline': [
			1,
			{ allowAllPropertiesOnSameLine: true }
		],
		'vue/operator-linebreak': [2, 'after'],
		'vue/prefer-template': 1,
		'vue/space-in-parens': 0,
		'vue/template-curly-spacing': [2, 'never'],
		'vue/no-constant-condition': 2,
		'vue/arrow-spacing': 0,
		'vue/block-spacing': 0,
		'vue/brace-style': 0,
		'vue/camelcase': 0,
		'vue/comma-dangle': 0,
		'vue/eqeqeq': 0,
		'vue/key-spacing': 0,
		'vue/space-infix-ops': 0,
		'vue/space-unary-ops': 0,
		'vue/object-curly-spacing': 0,
		'vue/array-bracket-spacing': 0,
		'vue/no-restricted-syntax': 0,
		'vue/multiline-ternary': 0,
		'vue/object-shorthand': [1, 'consistent-as-needed'],
		'vue/quote-props': [
			1,
			'consistent-as-needed',
			{
				keywords: true
			}
		],

		// Essential
		'vue/no-useless-template-attributes': 2,
		'vue/no-reserved-props': 2,
		'vue/no-computed-properties-in-data': 2,
		'vue/multi-word-component-names': 0,
		'vue/valid-v-bind-sync': 2,
		'vue/no-setup-props-destructure': 2,
		'vue/no-ref-as-operand': 2,
		'vue/no-mutating-props': 2,
		'vue/no-multiple-template-root': 2,
		'vue/no-custom-modifiers-on-v-model': 2,
		'vue/no-deprecated-data-object-declaration': 2,
		'vue/no-deprecated-filter': 2,
		'vue/no-deprecated-html-element-is': 2,
		'vue/no-deprecated-inline-template': 2,
		'vue/no-deprecated-slot-attribute': 2,
		'vue/no-deprecated-slot-scope-attribute': 2,
		'vue/no-deprecated-v-bind-sync': 2,
		'vue/no-deprecated-vue-config-keycodes': 2,
		'vue/no-dupe-v-else-if': 2,
		'vue/no-lifecycle-after-await': 2,
		'vue/no-watch-after-await': 2,
		'vue/no-v-for-template-key': 2,
		'vue/no-v-model-argument': 2,
		'vue/return-in-emits-validator': 2,
		'vue/use-v-on-exact': 2,
		'vue/no-v-text-v-html-on-component': 2,
		'vue/valid-attribute-name': 2,
		'vue/valid-model-definition': 2,
		'vue/valid-v-memo': 2,
		'vue/no-deprecated-destroyed-lifecycle': 2,
		'vue/no-deprecated-dollar-listeners-api': 2,
		'vue/no-deprecated-dollar-scopedslots-api': 2,
		'vue/no-deprecated-events-api': 2,
		'vue/no-deprecated-functional-template': 2,
		'vue/no-deprecated-props-default-this': 2,
		'vue/no-deprecated-v-on-native-modifier': 2,
		'vue/no-deprecated-v-on-number-modifiers': 2,
		'vue/no-v-for-template-key-on-child': 2,
		'vue/require-slots-as-functions': 2,
		'vue/require-toggle-inside-transition': 2,
		'vue/valid-v-is': 2,
		'vue/no-deprecated-v-is': 2,
		'vue/require-expose': 0,
		'vue/valid-define-emits': 1,
		'vue/valid-define-props': 1,
		'vue/no-deprecated-router-link-tag-prop': 2,
		'vue/no-expose-after-await': 2,
		'vue/prefer-import-from-vue': 2,
		'vue/no-arrow-functions-in-watch': 2,
		'vue/custom-event-name-casing': 2,
		'vue/no-async-in-computed-properties': 2,
		'vue/no-dupe-keys': 2,
		'vue/no-duplicate-attributes': [
			2,
			{ allowCoexistClass: true, allowCoexistStyle: true }
		],
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
		'vue/no-unused-components': 1,
		'vue/require-prop-type-constructor': 2,

		// Strongly recommended
		'vue/first-attribute-linebreak': [
			2,
			{ singleline: 'ignore', multiline: 'below' }
		],
		'vue/require-explicit-emits': 2,
		'vue/one-component-per-file': 2,
		'vue/component-definition-name-casing': [2, 'PascalCase'],
		'vue/attribute-hyphenation': [2, 'never'],
		'vue/html-end-tags': 2,
		'vue/html-indent': [2, 'tab'],
		'vue/html-self-closing': [
			2,
			{
				html: {
					void: 'always',
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
				multiline: 1
			}
		],
		'vue/mustache-interpolation-spacing': [2, 'always'],
		'vue/no-multi-spaces': 2,
		'vue/require-default-prop': 1,
		'vue/require-prop-types': 1,
		'vue/v-bind-style': [2, 'shorthand'],
		'vue/v-on-style': [2, 'shorthand'],
		'vue/no-template-shadow': 2,

		// Recommended
		'vue/no-multiple-slot-args': 2,
		'vue/no-lone-template': 1,
		'vue/component-tags-order': [
			2,
			{ 'order': ['template', 'script', 'style'] }
		],
		'vue/attributes-order': 2,
		'vue/html-quotes': [2, 'double'],
		'vue/order-in-components': 2,
		'vue/this-in-template': [1, 'never'], // TODO: review later
		'vue/no-use-v-if-with-v-for': 2,
		'vue/no-v-html': 1,

		// Uncategorized
		'vue/prefer-separate-static-class': 0,
		'vue/no-v-text': 2,
		'vue/no-use-computed-property-like-method': 1,
		'vue/no-undef-properties': 1,
		'vue/no-restricted-class': 0,
		'vue/block-tag-newline': 0,
		'vue/v-for-delimiter-style': [2, 'in'],
		'vue/static-class-names-order': 0,
		'vue/sort-keys': 0,
		'vue/require-name-property': 0,
		'vue/padding-line-between-blocks': [1, 'never'],
		'vue/no-useless-v-bind': 1,
		'vue/no-useless-mustaches': 2,
		'vue/no-unused-properties': 1,
		'vue/no-unsupported-features': 0,
		'vue/no-template-target-blank': 2,
		'vue/no-static-inline-styles': 2,
		'vue/no-reserved-component-names': 2,
		'vue/no-restricted-component-options': 0,
		'vue/no-restricted-static-attribute': 0,
		'vue/no-restricted-v-bind': 0,
		'vue/no-potential-component-option-typo': 0,
		'vue/no-multiple-objects-in-class': 1,
		'vue/no-duplicate-attr-inheritance': 2,
		'vue/no-empty-component-block': 1,
		'vue/no-bare-strings-in-template': 0,
		'vue/html-comment-content-newline': 0,
		'vue/html-comment-content-spacing': 0,
		'vue/html-comment-indent': 0,
		'vue/valid-v-slot': 2,
		'vue/v-slot-style': [
			2,
			{
				atComponent: 'v-slot',
				default: 'v-slot',
				named: 'longform'
			}
		],
		'vue/no-deprecated-scope-attribute': 2,
		'vue/no-empty-pattern': 2,
		'vue/dot-location': [1, 'property'],
		'vue/keyword-spacing': [
			2,
			{
				before: true,
				after: true
			}
		],
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
		],
		'vue/component-name-in-template-casing': [
			2,
			'PascalCase',
			{
				ignores: [
					'svg',
					'rect',
					'router-view',
					'router-link',
					'component',
					'transition',
					'transition-group',
					'keep-alive',
					'slot'
				]
			}
		],
		'vue/multiline-html-element-content-newline': 1,
		'vue/singleline-html-element-content-newline': 0,
		'vue/no-spaces-around-equal-signs-in-attribute': 2,
		'vue/html-button-has-type': 2,
		'vue/new-line-between-multi-line-property': 1,
		'vue/next-tick-style': [2, 'promise'],
		'vue/no-export-in-script-setup': 2,
		'vue/no-restricted-block': 0,
		'vue/no-restricted-call-after-await': 0,
		'vue/no-restricted-custom-event': 0,
		'vue/no-restricted-props': 0,
		'vue/no-this-in-before-route-enter': 2,
		'vue/no-unused-refs': 1,
		'vue/require-emit-validator': 1,
		'vue/v-on-event-hyphenation': 2,
		'vue/valid-next-tick': 2,
		'vue/match-component-file-name': 0,
		'vue/no-boolean-default': 0,
		'vue/require-direct-export': 2,
		'vue/v-on-function-call': [2, 'never'],
		'vue/block-lang': 0,
		'vue/component-api-style': 0,
		'vue/component-options-name-casing': [2, 'PascalCase'],
		'vue/no-child-content': 2,
		'vue/define-emits-declaration': 0,
		'vue/define-macros-order': 1,
		'vue/define-props-declaration': 0,
		'vue/match-component-import-name': 0,
		'vue/no-ref-object-destructure': 2,
		'vue/no-required-prop-with-default': 0,
		'vue/no-restricted-html-elements': 0,
		'vue/no-undef-components': 2,
		'vue/padding-line-between-tags': 0,
		'vue/prefer-prop-type-boolean-first': 2,
		'vue/prefer-true-attribute-shorthand': 0,
		'vue/v-on-handler-style': 0
	},

	overrides: [
		{
			files: ['*.vue'],
			rules: {
				indent: 0
			}
		},
		{
			files: ['!*.vue'],
			rules: {
				'vue/script-indent': 0
			}
		}
	]
};
