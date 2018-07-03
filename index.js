'use strict';

module.exports = {

	env: {
		node: true
	},

	parserOptions: {
		ecmaVersion: 2015,
		ecmaFeatures: {
			impliedStrict: true
		}
	},

	globals: {
		'Promise': false
	},

	plugins: [
		'promise',
		'node',
		'extend',
		'unicorn'
	],

	rules: {

		// extend
		'extend/no-unsafe-extend-inside-call': [2, {
			libraryNames: ['_', 'jQuery', '$']
		}],
		'extend/no-unsafe-extend-inside-assignment': [2, {
			libraryNames: ['_', 'jQuery', '$']
		}],

		// Node
		'node/exports-style': [1, 'module.exports'],
		'node/process-exit-as-throw': 1,

		// Unicorn
		'unicorn/catch-error-name': 1,
		'unicorn/explicit-length-check': [1, {
			'non-zero': 'not-equal'
		}],
		'unicorn/filename-case': [1, {
			'case': 'kebabCase'
		}],
		'unicorn/no-process-exit': 2,
		'unicorn/throw-new-error': 1,
		'unicorn/no-array-instanceof': 1,
		'unicorn/custom-error-definition': 2,
		'unicorn/prefer-type-error': 2,
		'unicorn/new-for-builtins': 2,
		'unicorn/no-fn-reference-in-iterator': 1,
		'unicorn/no-unsafe-regex': 2,
		'unicorn/prefer-add-event-listener': 2,
		'unicorn/prefer-spread': 1,
		'unicorn/regex-shorthand': 1,
		'unicorn/error-message': 1,

		// Possible errors
		'getter-return': [2, { allowImplicit: true }],
		'no-compare-neg-zero': 2,
		'comma-dangle': [1, 'never'],
		'no-cond-assign': [2, 'except-parens'],
		'no-console': 0,
		'no-constant-condition': 2,
		'no-control-regex': 1,
		'no-debugger': 2,
		'no-dupe-args': 2,
		'no-dupe-keys': 2,
		'no-duplicate-case': 2,
		'no-empty-character-class': 2,
		'no-empty': 1,
		'no-ex-assign': 2,
		'no-extra-boolean-cast': 2,
		'no-extra-parens': 0,
		'no-extra-semi': 1,
		'no-func-assign': 2,
		'no-inner-declarations': [2, 'both'],
		'no-invalid-regexp': 2,
		'no-irregular-whitespace': 2,
		'no-negated-in-lhs': 2,
		'no-obj-calls': 2,
		'no-regex-spaces': 2,
		'no-sparse-arrays': 2,
		'no-unexpected-multiline': 2,
		'no-unreachable': 2,
		'use-isnan': 2,
		'valid-jsdoc': [1, {
			prefer: {
				'return': 'return'
			},
			requireReturn: false,
			requireParamDescription: false,
			requireReturnDescription: false,
			requireReturnType: true
		}],
		'valid-typeof': 2,
		'no-unsafe-finally': 1,
		'no-unsafe-negation': 2,
		'no-prototype-builtins': 0,

		// Best practices
		'accessor-pairs': [2, {
			getWithoutSet: true
		}],
		'block-scoped-var': 2,
		'complexity': [1, 10],
		'consistent-return': 1,
		'curly': [2, 'all'],
		'default-case': 1,
		'dot-location': [1, 'property'],
		'dot-notation': 1,
		'eqeqeq': 2,
		'guard-for-in': 2,
		'no-alert': 0,
		'no-caller': 2,
		'no-case-declarations': 2,
		'no-div-regex': 2,
		'no-else-return': 1,
		'no-empty-pattern': 2,
		'no-eq-null': 2,
		'no-eval': 1,
		'no-extend-native': 1,
		'no-extra-bind': 1,
		'no-fallthrough': 2,
		'no-floating-decimal': 2,
		'no-global-assign': 2,
		'no-implicit-coercion': 2,
		'no-implied-eval': 2,
		'no-invalid-this': 1,
		'no-iterator': 2,
		'no-labels': 2,
		'no-lone-blocks': 2,
		'no-loop-func': 2,
		'no-magic-numbers': 0,
		'no-multi-spaces': [1, {
			exceptions: {
				'Property': true,
				'VariableDeclarator': true,
				'ImportDeclaration': true
			}
		}],
		'no-multi-str': 2,
		'no-native-reassign': 2,
		'no-new-func': 1,
		'no-new-wrappers': 2,
		'no-new': 1,
		'no-octal-escape': 2,
		'no-octal': 2,
		'no-param-reassign': 0,
		'no-process-env': 1,
		'no-proto': 2,
		'no-redeclare': [2, {
			builtinGlobals: true
		}],
		'no-restricted-properties': 0,
		'no-return-assign': [2, 'always'],
		'no-script-url': 1,
		'no-self-compare': 1,
		'no-sequences': 1,
		'no-throw-literal': 2,
		'no-unused-expressions': 1,
		'no-useless-call': 0,
		'no-useless-concat': 1,
		'no-useless-return': 1,
		'no-void': 2,
		'no-warning-comments': 0,
		'no-with': 2,
		'radix': [2, 'always'],
		'vars-on-top': 2,
		'wrap-iife': [2, 'inside'],
		'yoda': 1,
		'array-callback-return': 1,
		'no-empty-function': 0,
		'no-extra-label': 2,
		'no-self-assign': 0,
		'no-unmodified-loop-condition': 1,
		'no-unused-labels': 2,
		'no-implicit-globals': 0,
		'no-useless-escape': 1,
		'for-direction': 2,

		// Strict mode
		'strict': 0,

		// Variables
		'init-declarations': 0,
		'no-catch-shadow': 2,
		'no-delete-var': 2,
		'no-label-var': 2,
		'no-shadow-restricted-names': 2,
		'no-shadow': [1, {
			builtinGlobals: true,
			hoist: 'all',
			allow: ['cb', 'done']
		}],
		'no-undef-init': 2,
		'no-undef': 2,
		'no-undefined': 2,
		'no-unused-vars': 1,
		'no-use-before-define': [2, 'nofunc'],
		'no-restricted-globals': 0,

		// Node.js and CommonJS
		'no-buffer-constructor': 2,
		'callback-return': 0,
		'global-require': 0,
		'handle-callback-err': 1,
		'no-mixed-requires': [1, {
			grouping: true
		}],
		'no-new-require': 2,
		'no-path-concat': 2,
		'no-process-exit': 2,
		'no-restricted-modules': 0,
		'no-sync': 1,

		// Stylistic issues
		'switch-colon-spacing': [1, { before: false, after: true }],
		'semi-style': [2, 'last'],
		'padding-line-between-statements': [2,

			// Blank line always after directives
			{ blankLine: 'always', prev: 'directive', next: '*' },
			{ blankLine: 'any', prev: 'directive', next: 'directive' },

			// Blank line always before "module.exports" and "export" statement
			{ blankLine: 'always', prev: '*', next: 'cjs-export' },
			{ blankLine: 'never', prev: 'cjs-export', next: 'cjs-export' },
			{ blankLine: 'always', prev: '*', next: 'export' },

			// Blank line always after last "require" and "import" statement
			{ blankLine: 'always', prev: 'cjs-import', next: '*' },
			{ blankLine: 'any', prev: 'cjs-import', next: 'cjs-import' },
			{ blankLine: 'always', prev: 'import', next: '*' },
			{ blankLine: 'any', prev: 'import', next: 'import' }

		],
		'multiline-comment-style': [1, 'starred-block'],
		'lines-between-class-members': [1, 'always'],
		'implicit-arrow-linebreak': [1, 'beside'],
		'function-paren-newline': [1, 'multiline'],
		'array-bracket-spacing': [1, 'never'],
		'block-spacing': [1, 'always'],
		'brace-style': [2, '1tbs', {
			allowSingleLine: true
		}],
		'camelcase': [2, {
			properties: 'always'
		}],
		'capitalized-comments': [1, 'always', {
			ignoreInlineComments: true,
			ignoreConsecutiveComments: true
		}],
		'comma-spacing': [2, {
			before: false,
			after: true
		}],
		'comma-style': [2, 'last'],
		'computed-property-spacing': [2, 'never'],
		'consistent-this': [2, 'self'],
		'eol-last': [2, 'unix'],
		'func-call-spacing': [2, 'never'],
		'func-name-matching': 0,
		'func-names': 0,
		'func-style': [1, 'declaration', {
			allowArrowFunctions: true
		}],
		'id-length': 0,
		'id-match': 0,
		'indent': [2, 'tab', {
			'SwitchCase': 1
		}],
		'jsx-quotes': [2, 'prefer-double'],
		'key-spacing': [2, {
			beforeColon: false,
			afterColon: true
		}],
		'linebreak-style': [2, 'unix'],
		'lines-around-comment': 0,
		'max-depth': [1, 3],
		'max-len': 0,
		'max-lines': [1, {
			max: 600,
			skipBlankLines: true,
			skipComments: true
		}],
		'max-nested-callbacks': [1, 3],
		'max-params': [1, 4],
		'max-statements': 0,
		'multiline-ternary': 0,
		'max-statements-per-line': [1, {
			max: 4
		}],
		'new-cap': 2,
		'new-parens': 2,
		'no-array-constructor': 1,
		'no-bitwise': 1,
		'no-continue': 1,
		'no-inline-comments': 0,
		'no-lonely-if': 1,
		'no-mixed-operators': 2,
		'no-mixed-spaces-and-tabs': [2, 'smart-tabs'],
		'no-multi-assign': 0,
		'no-multiple-empty-lines': [2, {
			max: 5,
			maxEOF: 1
		}],
		'no-negated-condition': 0,
		'no-nested-ternary': 2,
		'no-new-object': 1,
		'no-plusplus': 0,
		'no-restricted-syntax': 0,
		'no-tabs': 0,
		'no-spaced-func': 2,
		'no-ternary': 0,
		'no-trailing-spaces': 2,
		'no-underscore-dangle': 0,
		'no-unneeded-ternary': 1,
		'object-curly-spacing': [1, 'always'],
		'one-var': [1, {
			uninitialized: 'always',
			initialized: 'never'
		}],
		'operator-assignment': 0,
		'operator-linebreak': [2, 'after'],
		'padded-blocks': 0,
		'quote-props': [1, 'as-needed', {
			keywords: true
		}],
		'quotes': [2, 'single', {
			allowTemplateLiterals: true
		}],
		'require-jsdoc': 0,
		'semi-spacing': [1, {
			before: false,
			after: true
		}],
		'semi': [2, 'always'],
		'sort-keys': 0,
		'sort-vars': 0,
		'keyword-spacing': [2, {
			before: true,
			after: true
		}],
		'line-comment-position': 0,
		'space-before-blocks': [2, 'always'],
		'space-before-function-paren': [2, 'always'],
		'space-in-parens': 0,
		'space-infix-ops': 1,
		'space-unary-ops': [1, {
			words: true,
			nonwords: false
		}],
		'spaced-comment': [1, 'always', {
			line: {
				exceptions: ['-']
			},
			block: {
				exceptions: ['-']
			}
		}],
		'wrap-regex': 0,
		'id-blacklist': 0,
		'newline-per-chained-call': [1, {
			ignoreChainWithDepth: 4
		}],
		'no-whitespace-before-property': 1,
		'nonblock-statement-body-position': 0,
		'one-var-declaration-per-line': 0,
		'object-property-newline': [1, { allowAllPropertiesOnSameLine: true }],
		'object-curly-newline': 0,
		'unicode-bom': [2, 'never'],
		'array-bracket-newline': [1, { multiline: true }],
		'array-element-newline': [1, 'always'],

		// ES2015 (we want to use subset from ES2015)
		'promise/catch-or-return': 1,
		'promise/always-return': 2,
		'promise/param-names': 2,
		'promise/no-native': 0,
		'promise/avoid-new': 0,
		'promise/no-callback-in-promise': 0,
		'promise/no-nesting': 0,
		'promise/no-promise-in-callback': 0,
		'promise/no-return-wrap': 1,
		'promise/prefer-await-to-callbacks': 0,
		'promise/prefer-await-to-then': 0,
		'promise/no-new-statics': 2,
		'promise/no-return-in-finally': 1,
		'promise/valid-params': 2,

		'node/no-unsupported-features': [2, {
			version: 4
		}],

		'arrow-body-style': [1, 'as-needed'],
		'arrow-parens': [2, 'always'],
		'arrow-spacing': [2, {
			before: true,
			after: true
		}],
		'no-confusing-arrow': [1, { allowParens: true }],
		'no-const-assign': 2,
		'no-var': 0,
		'prefer-arrow-callback': 0,
		'prefer-const': 0,
		'prefer-template': 1,
		'template-curly-spacing': [2, 'never'],
		'no-template-curly-in-string': 1,
		'prefer-promise-reject-errors': [1, {
			allowEmptyReject: true
		}],
		'template-tag-spacing': [2, 'never'],
		'no-useless-computed-key': 1,
		'object-shorthand': [1, 'consistent-as-needed']
	}
};
