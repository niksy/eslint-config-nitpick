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

		// React
		'react/display-name': 0,
		'react/forbid-component-props': 1,
		'react/forbid-elements': 0,
		'react/forbid-prop-types': 0,
		'react/forbid-foreign-prop-types': 0,
		'react/no-array-index-key': 2,
		'react/no-children-prop': 1,
		'react/no-danger': 2,
		'react/no-danger-with-children': 2,
		'react/no-deprecated': 1,
		'react/no-did-mount-set-state': 1,
		'react/no-did-update-set-state': 1,
		'react/no-will-update-set-state': 1,
		'react/no-direct-mutation-state': 2,
		'react/no-find-dom-node': 2,
		'react/no-is-mounted': 2,
		'react/no-multi-comp': [1, { ignoreStateless: true }],
		'react/no-render-return-value': 1,
		'react/no-set-state': 0,
		'react/no-string-refs': 2,
		'react/no-unescaped-entities': 2,
		'react/no-unknown-property': 0,
		'react/no-unused-prop-types': 0,
		'react/prefer-es6-class': 0,
		'react/prefer-stateless-function': [1, { ignorePureComponents: true }],
		'react/prop-types': 0,
		'react/react-in-jsx-scope': 2,
		'react/require-default-props': 0,
		'react/require-optimization': 0,
		'react/require-render-return': 2,
		'react/self-closing-comp': 1,
		'react/sort-comp': 1,
		'react/sort-prop-types': 0,
		'react/style-prop-object': 1,
		'react/void-dom-elements-no-children': 2,

		// JSX
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
		'react/jsx-uses-react': 1,
		'react/jsx-uses-vars': 1,
		'react/jsx-wrap-multilines': 2
	}
};
