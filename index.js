module.exports = {
	env: {
		node: true,
		browser: true
	},
	rules: {

		// Possible errors
		'comma-dangle': [2, 'never'],
		'no-cond-assign': [2, 'except-parens'],
		'no-console': 2,
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
		'no-extra-parens': [1, 'all'],
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
			'prefer': {
				'return': 'return'
			},
			'requireReturn': false,
			'requireParamDescription': false,
			'requireReturnDescription': false,
			'requireReturnType': true
		}],
		'valid-typeof': 2,

		// Best practices
		'accessor-pairs': [2, {
			'getWithoutSet': true
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
		'no-implicit-coercion': 2,
		'no-implied-eval': 2,
		'no-invalid-this': 1,
		'no-iterator': 2,
		'no-labels': 2,
		'no-lone-blocks': 2,
		'no-loop-func': 2,
		'no-magic-numbers': 0,
		'no-multi-spaces': [1, {
			'exceptions': {
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
		'no-param-reassign': [1, {
			'props': true
		}],
		'no-process-env': 1,
		'no-proto': 2,
		'no-redeclare': [2, {
			'builtinGlobals': true
		}],
		'no-return-assign': [2, 'always'],
		'no-script-url': 1,
		'no-self-compare': 1,
		'no-sequences': 1,
		'no-throw-literal': 2,
		'no-unused-expressions': 1,
		'no-useless-call': 0,
		'no-useless-concat': 1,
		'no-void': 2,
		'no-warning-comments': 0,
		'no-with': 2,
		'radix': [2, 'always'],
		'vars-on-top': 2,
		'wrap-iife': [2, 'inside'],
		'yoda': 1,

		// Strict mode
		'strict': 0,

		// Variables
		'init-declarations': 0,
		'no-catch-shadow': 2,
		'no-delete-var': 2,
		'no-label-var': 2,
		'no-shadow-restricted-names': 2,
		'no-shadow': [1, {
			'builtinGlobals': true,
			'hoist': 'all',
			'allow': ['cb', 'done']
		}],
		'no-undef-init': 2,
		'no-undef': 2,
		'no-undefined': 2,
		'no-unused-vars': 1,
		'no-use-before-define': [2, 'nofunc'],

		// Node.js and CommonJS
		'callback-return': 0,
		'global-require': 1,
		'handle-callback-err': 1,
		'no-mixed-requires': [1, {
			'grouping': true
		}],
		'no-new-require': 2,
		'no-path-concat': 2,
		'no-process-exit': 2,
		'no-restricted-modules': 0,
		'no-sync': 0,

		// Stylistic issues
		'array-bracket-spacing': [1, 'never'],
		'block-spacing': [1, 'always'],
		'brace-style': [2, '1tbs', {
			'allowSingleLine': true
		}],
		'camelcase': [2, {
			'properties': 'always'
		}],
		'comma-spacing': [2, {
			'before': false,
			'after': true
		}],
		'comma-style': [2, 'last'],
		'computed-property-spacing': [2, 'never'],
		'consistent-this': [2, 'self'],
		'eol-last': [2, 'unix'],
		'func-names': 0,
		'func-style': [1, 'declaration', {
			'allowArrowFunctions': true
		}],
		'id-length': 0,
		'id-match': 0,
		'indent': [2, 'tab', {
			'SwitchCase': 1
		}],
		'jsx-quotes': [2, 'prefer-double'],
		'key-spacing': [2, {
			'beforeColon': false,
			'afterColon': true
		}],
		'linebreak-style': [2, 'unix'],
		'lines-around-comment': 0,
		'max-depth': [1, 3],
		'max-len': 0,
		'max-nested-callbacks': [1, 3],
		'max-params': [1, 4],
		'max-statements': 0,
		'new-cap': 2,
		'new-parens': 2,
		'newline-after-var': 0,
		'no-array-constructor': 1,
		'no-bitwise': 1,
		'no-continue': 1,
		'no-inline-comments': 0,
		'no-lonely-if': 1,
		'no-mixed-spaces-and-tabs': [2, 'smart-tabs'],
		'no-multiple-empty-lines': [2, {
			'max': 5,
			'maxEOF': 1
		}],
		'no-negated-condition': 0,
		'no-nested-ternary': 2,
		'no-new-object': 1,
		'no-plusplus': 0,
		'no-restricted-syntax': 0,
		'no-spaced-func': 2,
		'no-ternary': 0,
		'no-trailing-spaces': 2,
		'no-underscore-dangle': 0,
		'no-unneeded-ternary': 1,
		'object-curly-spacing': [1, 'always'],
		'one-var': [1, {
			'uninitialized': 'always',
			'initialized': 'never'
		}],
		'operator-assignment': 0,
		'operator-linebreak': [2, 'after'],
		'padded-blocks': 0,
		'quote-props': [1, 'as-needed', {
			'keywords': true
		}],
		'quotes': [2, 'single'],
		'require-jsdoc': 0,
		'semi-spacing': [1, {
			'before': false,
			'after': true
		}],
		'semi': [2, 'always'],
		'sort-vars': 0,
		'keyword-spacing': [2, {
			'before': true,
			'after': true
		}],
		'space-before-blocks': [2, 'always'],
		'space-before-function-paren': [2, 'always'],
		'space-in-parens': 0,
		'space-infix-ops': 1,
		'space-unary-ops': [1, {
			'words': true,
			'nonwords': false
		}],
		'spaced-comment': [1, 'always', {
			'line': {
				'exceptions': ['-']
			},
			'block': {
				'exceptions': ['-']
			}
		}],
		'wrap-regex': 0
	}
};
