'use strict';

module.exports = {
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		}
	},

	settings: {
		react: {
			version: '16'
		}
	},

	plugins: ['eslint-plugin-react'],

	rules: {
		// React
		'react/boolean-prop-naming': [
			1,
			{ rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+' }
		],
		'react/default-props-match-prop-types': 1,
		'react/destructuring-assignment': [1, 'always'],
		'react/forbid-dom-props': 0,
		'react/jsx-sort-default-props': 0,
		'react/no-access-state-in-setstate': 2,
		'react/no-redundant-should-component-update': 1,
		'react/no-this-in-sfc': 2,
		'react/no-typos': 2,
		'react/no-unused-state': 1,
		'react/display-name': 0,
		'react/forbid-component-props': 1,
		'react/forbid-elements': 0,
		'react/forbid-prop-types': 0,
		'react/forbid-foreign-prop-types': 0,
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
		'react/no-unknown-property': 0,
		'react/no-unused-prop-types': 0,
		'react/prefer-es6-class': 0,
		'react/prefer-stateless-function': [1, { ignorePureComponents: true }],
		'react/prop-types': 0,
		'react/react-in-jsx-scope': 2,
		'react/require-default-props': 0,
		'react/require-optimization': 0,
		'react/sort-comp': 1,
		'react/sort-prop-types': 0,
		'react/jsx-uses-react': 1,
		'react/no-unsafe': 2,
		'react/jsx-fragments': 0,
		'react/jsx-props-no-spreading': 0,
		'react/prefer-read-only-props': 0,
		'react/state-in-constructor': [1, 'never'],
		'react/static-property-placement': [1, 'static public field'],
		'react/jsx-curly-newline': 0,
		'react/jsx-no-useless-fragment': 0,
		'react/function-component-definition': 0,
		'react/jsx-no-script-url': 1,
		'react/no-adjacent-inline-elements': 1,
		'react/jsx-newline': 0,
		'react/jsx-no-constructed-context-values': 0,
		'react/no-unstable-nested-components': 1,
		'react/no-arrow-function-lifecycle': 1,
		'react/no-invalid-html-attribute': 1,
		'react/no-namespace': 1,
		'react/no-unused-class-component-methods': 1,
		'react/prefer-exact-props': 0
	}
};
