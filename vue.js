'use strict';

module.exports = {

	parserOptions: {
		ecmaFeatures: {
			jsx: true
		}
	},

	plugins: [
		'react'
	],

	rules: {

		// Other
		'no-unused-vars': [1, { argsIgnorePattern: '^h$' }],

		// React/JSX
		'react/no-array-index-key': 2,
		'react/no-unescaped-entities': 2,
		'react/require-render-return': 2,
		'react/self-closing-comp': 1,
		'react/style-prop-object': 1,
		'react/void-dom-elements-no-children': 2,

		// JSX
		'react/jsx-space-before-closing': 0,
		'react/jsx-child-element-spacing': 1,
		'react/jsx-closing-tag-location': 2,
		'react/jsx-curly-brace-presence': [1, 'never'],
		'react/jsx-max-depth': [1, { max: 15 }],
		'react/jsx-one-expression-per-line': 0,
		'react/jsx-props-no-multi-spaces': 2,
		'react/button-has-type': 2,
		'react/jsx-boolean-value': [2, 'always'],
		'react/jsx-closing-bracket-location': [1, 'tag-aligned'],
		'react/jsx-curly-spacing': [1, 'never'],
		'react/jsx-equals-spacing': [1, 'never'],
		'react/jsx-filename-extension': 0,
		'react/jsx-first-prop-new-line': 0,
		'react/jsx-handler-names': 1,
		'react/jsx-indent': [2, 'tab'],
		'react/jsx-indent-props': [2, 'tab'],
		'react/jsx-key': 2,
		'react/jsx-max-props-per-line': [1, { maximum: 5 }],
		'react/jsx-no-bind': [1, {
			ignoreRefs: true,
			allowArrowFunctions: true
		}],
		'react/jsx-no-comment-textnodes': 1,
		'react/jsx-no-duplicate-props': 1,
		'react/jsx-no-literals': 0,
		'react/jsx-no-target-blank': 1,
		'react/jsx-no-undef': 1,
		'react/jsx-pascal-case': 2,
		'react/jsx-sort-props': [1, {
			ignoreCase: true,
			callbacksLast: true,
			shorthandFirst: true,
			noSortAlphabetically: true,
			reservedFirst: true
		}],
		'react/jsx-tag-spacing': [1, {
			closingSlash: 'never',
			beforeSelfClosing: 'always',
			afterOpening: 'never'
		}],
		'react/jsx-uses-vars': 1,
		'react/jsx-wrap-multilines': 2
	}
};
