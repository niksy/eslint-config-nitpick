import globals from 'globals';
import pluginPromise from 'eslint-plugin-promise';
import pluginNode from 'eslint-plugin-n';
import pluginUnicorn from 'eslint-plugin-unicorn';
import pluginJsdoc from 'eslint-plugin-jsdoc';
import pluginImport from 'eslint-plugin-import';

export default {
	languageOptions: {
		ecmaVersion: 2022,
		sourceType: 'module',
		globals: {
			...globals.node,
			...globals.es2022
		}
	},
	plugins: {
		promise: pluginPromise,
		n: pluginNode,
		unicorn: pluginUnicorn,
		jsdoc: pluginJsdoc,
		import: pluginImport
	},
	rules: {
		'n/no-sync': 1,
		'n/no-restricted-require': 0,
		'n/no-restricted-import': 0,
		'n/no-process-exit': 2,
		'n/no-process-env': 1,
		'n/no-path-concat': 2,
		'n/no-new-require': 2,
		'n/no-mixed-requires': [
			1,
			{
				grouping: true
			}
		],
		'n/callback-return': 1,
		'n/global-require': 0,
		'n/handle-callback-err': 1,
		'n/no-callback-literal': 2,
		'n/no-exports-assign': 2,
		'n/exports-style': [1, 'module.exports'],
		// Ref. https://github.com/mysticatea/eslint-plugin-node/issues/301
		'n/process-exit-as-throw': 0,
		'n/prefer-global/url': [1, 'always'],
		'n/prefer-global/url-search-params': [1, 'always'],
		'n/no-deprecated-api': 0,
		'n/no-missing-import': 0,
		'n/no-missing-require': 0,
		'n/no-unpublished-import': 0,
		'n/no-unpublished-require': 0,
		'n/no-unpublished-bin': 0,
		'n/shebang': 0,
		'n/no-hide-core-modules': 0,
		'n/no-extraneous-import': 0,
		'n/no-extraneous-require': 0,
		'n/no-unsupported-features/es-builtins': 0,
		'n/no-unsupported-features/es-syntax': 0,
		'n/no-unsupported-features/node-builtins': 0,
		'n/prefer-global/buffer': 0,
		'n/prefer-global/console': 0,
		'n/prefer-global/process': 0,
		'n/prefer-global/text-decoder': 0,
		'n/prefer-global/text-encoder': 0,
		'n/prefer-promises/dns': 0,
		'n/prefer-promises/fs': 1,
		'n/hashbang': 1,
		'n/prefer-node-protocol': 1,
		'unicorn/better-regex': 1,
		'unicorn/import-style': 1,
		'unicorn/no-null': 0,
		'unicorn/no-object-as-default-parameter': 2,
		'unicorn/no-reduce': 0,
		'unicorn/no-useless-undefined': 0,
		'unicorn/numeric-separators-style': 1,
		'unicorn/prefer-array-find': 1,
		'unicorn/prefer-math-trunc': 0,
		'unicorn/prefer-number-properties': 0,
		'unicorn/prefer-optional-catch-binding': 0,
		'unicorn/prefer-replace-all': 0,
		'unicorn/prefer-set-has': 0,
		'unicorn/prefer-ternary': 0,
		'unicorn/string-content': 0,
		'unicorn/catch-error-name': 1,
		'unicorn/explicit-length-check': [
			1,
			{
				'non-zero': 'not-equal'
			}
		],
		'unicorn/filename-case': [
			1,
			{
				case: 'kebabCase'
			}
		],
		'unicorn/no-process-exit': 2,
		'unicorn/throw-new-error': 1,
		'unicorn/no-array-instanceof': 1,
		'unicorn/custom-error-definition': 2,
		'unicorn/prefer-type-error': 2,
		'unicorn/new-for-builtins': 2,
		'unicorn/no-unsafe-regex': 2,
		'unicorn/prefer-add-event-listener': 2,
		'unicorn/prefer-spread': 1,
		'unicorn/regex-shorthand': 1,
		'unicorn/error-message': 1,
		'unicorn/no-unreadable-array-destructuring': 1,
		'unicorn/no-zero-fractions': 1,
		'unicorn/prefer-query-selector': 1,
		'unicorn/prefer-text-content': 1,
		'unicorn/prevent-abbreviations': 1,
		'unicorn/no-keyword-prefix': 1,
		'unicorn/prefer-flat-map': 1,
		'unicorn/prefer-negative-index': 1,
		'unicorn/prefer-string-slice': 1,
		'unicorn/prefer-trim-start-end': 1,
		'unicorn/consistent-destructuring': 0,
		'unicorn/empty-brace-spaces': 1,
		'unicorn/no-array-callback-reference': 2,
		'unicorn/no-array-for-each': 0,
		'unicorn/no-array-push-push': 0,
		'unicorn/no-array-reduce': 0,
		'unicorn/no-instanceof-array': 1,
		'unicorn/no-lonely-if': 1,
		'unicorn/no-new-array': 1,
		'unicorn/no-static-only-class': 0,
		'unicorn/no-this-assignment': 1,
		'unicorn/prefer-array-flat': 0,
		'unicorn/prefer-array-flat-map': 0,
		'unicorn/prefer-array-index-of': 1,
		'unicorn/prefer-array-some': 1,
		'unicorn/prefer-date-now': 1,
		'unicorn/prefer-default-parameters': 1,
		'unicorn/prefer-keyboard-event-key': 0,
		'unicorn/prefer-node-protocol': 1,
		'unicorn/prefer-regexp-test': 1,
		'unicorn/prefer-string-replace-all': 0,
		'unicorn/prefer-string-starts-ends-with': 0,
		'unicorn/prefer-string-trim-start-end': 0,
		'unicorn/prefer-switch': 0,
		'unicorn/escape-case': 0,
		'unicorn/no-abusive-eslint-disable': 0,
		'unicorn/no-hex-escape': 0,
		'unicorn/number-literal-case': 0,
		'unicorn/prefer-starts-ends-with': 0,
		'unicorn/import-index': 0,
		'unicorn/no-new-buffer': 0,
		'unicorn/no-fn-reference-in-iterator': 0,
		'unicorn/no-console-spaces': 0,
		'unicorn/no-for-loop': 0,
		'unicorn/no-unused-properties': 0,
		'unicorn/prefer-exponentiation-operator': 0,
		'unicorn/prefer-includes': 0,
		'unicorn/prefer-node-append': 0,
		'unicorn/prefer-node-remove': 0,
		'unicorn/consistent-function-scoping': 0,
		'unicorn/expiring-todo-comments': 0,
		'unicorn/no-nested-ternary': 0,
		'unicorn/prefer-event-key': 0,
		'unicorn/prefer-reflect-apply': 0,
		'unicorn/no-array-method-this-argument': 2,
		'unicorn/no-await-expression-member': 2,
		'unicorn/no-empty-file': 0,
		'unicorn/no-invalid-remove-event-listener': 2,
		'unicorn/no-useless-fallback-in-spread': 1,
		'unicorn/no-useless-length-check': 1,
		'unicorn/no-useless-spread': 1,
		'unicorn/prefer-code-point': 1,
		'unicorn/prefer-prototype-methods': 1,
		'unicorn/require-array-join-separator': 2,
		'unicorn/require-number-to-fixed-digits-argument': 2,
		'unicorn/template-indent': 0,
		'unicorn/no-thenable': 1,
		'unicorn/no-unnecessary-await': 1,
		'unicorn/no-unreadable-iife': 1,
		'unicorn/no-useless-promise-resolve-reject': 1,
		'unicorn/no-useless-switch-case': 1,
		'unicorn/prefer-event-target': 1,
		'unicorn/prefer-json-parse-buffer': 0,
		'unicorn/prefer-logical-operator-over-ternary': 1,
		'unicorn/prefer-modern-math-apis': 0,
		'unicorn/prefer-native-coercion-functions': 0,
		'unicorn/relative-url-style': 0,
		'unicorn/switch-case-braces': [1, 'always'],
		'unicorn/text-encoding-identifier-case': 2,
		'unicorn/no-negated-condition': 0,
		'unicorn/no-typeof-undefined': 0,
		'unicorn/no-unnecessary-polyfills': 0,
		'unicorn/prefer-blob-reading-methods': 1,
		'unicorn/prefer-set-size': 1,
		'jsdoc/check-line-alignment': 0,
		'jsdoc/require-property': 0,
		'jsdoc/check-property-names': 0,
		'jsdoc/require-property-description': 0,
		'jsdoc/no-bad-blocks': 1,
		'jsdoc/require-property-name': 1,
		'jsdoc/no-defaults': 0,
		'jsdoc/require-property-type': 1,
		'jsdoc/require-file-overview': 0,
		'jsdoc/require-throws': 1,
		'jsdoc/check-access': 1,
		'jsdoc/check-values': 0,
		'jsdoc/empty-tags': 1,
		'jsdoc/implements-on-classes': 1,
		'jsdoc/match-description': 0,
		'jsdoc/no-types': 0,
		'jsdoc/check-alignment': 1,
		'jsdoc/check-examples': 0,
		'jsdoc/check-indentation': 1,
		'jsdoc/check-param-names': 1,
		'jsdoc/check-syntax': 2,
		'jsdoc/check-tag-names': 1,
		'jsdoc/check-types': 2,
		'jsdoc/no-undefined-types': 2,
		'jsdoc/require-description-complete-sentence': 1,
		'jsdoc/require-description': 0,
		'jsdoc/require-example': 0,
		'jsdoc/require-hyphen-before-param-description': [2, 'always'],
		'jsdoc/require-param-description': 0,
		'jsdoc/require-param-name': 2,
		'jsdoc/require-param-type': 2,
		'jsdoc/require-param': 1,
		'jsdoc/require-returns-description': 0,
		'jsdoc/require-returns-type': 2,
		'jsdoc/require-returns-check': 1,
		'jsdoc/require-returns': 1,
		'jsdoc/valid-types': 1,
		'jsdoc/require-jsdoc': 0,
		'jsdoc/no-missing-syntax': 0,
		'jsdoc/no-restricted-syntax': 0,
		'jsdoc/require-asterisk-prefix': 2,
		'jsdoc/require-yields': 1,
		'jsdoc/require-yields-check': 1,
		'jsdoc/match-name': 0,
		'jsdoc/multiline-blocks': 0,
		'jsdoc/no-multi-asterisks': 1,
		'jsdoc/tag-lines': 0,
		'jsdoc/sort-tags': 0,
		'jsdoc/text-escaping': 0,
		'jsdoc/imports-as-dependencies': 0,
		'jsdoc/informative-docs': 0,
		'jsdoc/no-blank-block-descriptions': 0,
		'jsdoc/no-blank-blocks': 0,
		'no-unreachable-loop': 2,
		'no-useless-backreference': 1,
		'no-loss-of-precision': 1,
		'no-promise-executor-return': 2,
		'getter-return': [2, { allowImplicit: true }],
		'no-compare-neg-zero': 2,
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
		'valid-typeof': 2,
		'no-unsafe-finally': 1,
		'no-unsafe-negation': 2,
		'no-prototype-builtins': 0,
		'no-async-promise-executor': 2,
		'no-misleading-character-class': 1,
		'require-atomic-updates': 1,
		'no-dupe-else-if': 2,
		'no-import-assign': 2,
		'no-setter-return': 2,
		'no-unsafe-optional-chaining': 1,
		'no-constant-binary-expression': 2,
		'no-new-native-nonconstructor': 1,
		'default-case-last': 2,
		'prefer-regex-literals': 1,
		'accessor-pairs': [
			2,
			{
				getWithoutSet: true
			}
		],
		'block-scoped-var': 2,
		complexity: [1, 10],
		'consistent-return': 1,
		curly: [2, 'all'],
		'default-case': 1,
		'dot-notation': 1,
		eqeqeq: 2,
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
		'no-global-assign': 2,
		'no-implicit-coercion': 2,
		'no-implied-eval': 2,
		'no-invalid-this': 1,
		'no-iterator': 2,
		'no-labels': 2,
		'no-lone-blocks': 2,
		'no-loop-func': 2,
		'no-magic-numbers': 0,
		'no-multi-str': 2,
		'no-native-reassign': 2,
		'no-new-func': 1,
		'no-new-wrappers': 2,
		'no-new': 1,
		'no-octal-escape': 2,
		'no-octal': 2,
		'no-param-reassign': [1, { props: true }],
		'no-proto': 2,
		'no-redeclare': [
			2,
			{
				builtinGlobals: true
			}
		],
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
		radix: [2, 'always'],
		'vars-on-top': 2,
		yoda: 1,
		'array-callback-return': 1,
		'no-empty-function': 0,
		'no-extra-label': 2,
		'no-self-assign': 0,
		'no-unmodified-loop-condition': 1,
		'no-unused-labels': 2,
		'no-implicit-globals': 0,
		'no-useless-escape': 1,
		'for-direction': 2,
		'max-classes-per-file': 0,
		'require-unicode-regexp': 0,
		'no-useless-catch': 1,
		'default-param-last': 1,
		'grouped-accessor-pairs': [1, 'getBeforeSet'],
		'no-constructor-return': 2,
		'no-nonoctal-decimal-escape': 0,
		'logical-assignment-operators': 0,
		'no-empty-static-block': 1,
		strict: [2, 'global'],
		'init-declarations': 0,
		'no-catch-shadow': 2,
		'no-delete-var': 2,
		'no-label-var': 2,
		'no-shadow-restricted-names': 2,
		'no-shadow': [
			1,
			{
				builtinGlobals: true,
				hoist: 'all',
				allow: ['cb', 'done']
			}
		],
		'no-undef-init': 2,
		'no-undef': 2,
		'no-undefined': 2,
		'no-unused-vars': 1,
		'no-use-before-define': [2, 'nofunc'],
		'no-restricted-globals': 0,
		'no-buffer-constructor': 2,
		'id-denylist': 0,
		'prefer-exponentiation-operator': 0,
		'multiline-comment-style': [1, 'starred-block'],
		camelcase: [
			2,
			{
				properties: 'always'
			}
		],
		'capitalized-comments': 0,
		'consistent-this': [2, 'self'],
		'func-name-matching': 0,
		'func-names': 0,
		'func-style': [
			1,
			'declaration',
			{
				allowArrowFunctions: true
			}
		],
		'id-length': 0,
		'id-match': 0,
		'max-depth': [1, 3],
		'max-lines': [
			1,
			{
				max: 600,
				skipBlankLines: true,
				skipComments: true
			}
		],
		'max-nested-callbacks': [1, 3],
		'max-params': [1, 4],
		'max-statements': 0,
		'new-cap': 2,
		'no-array-constructor': 1,
		'no-bitwise': 1,
		'no-continue': 1,
		'no-inline-comments': 0,
		'no-lonely-if': 1,
		'no-multi-assign': 0,
		'no-negated-condition': 0,
		'no-nested-ternary': 2,
		'no-new-object': 1,
		'no-plusplus': 0,
		'no-restricted-syntax': 0,
		'no-spaced-func': 2,
		'no-ternary': 0,
		'no-underscore-dangle': 0,
		'no-unneeded-ternary': 1,
		'one-var': [
			1,
			{
				uninitialized: 'always',
				initialized: 'never'
			}
		],
		'operator-assignment': 0,
		'sort-keys': 0,
		'sort-vars': 0,
		'line-comment-position': 0,
		'id-blacklist': 0,
		'unicode-bom': [2, 'never'],
		'max-lines-per-function': 0,
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
		'promise/no-multiple-resolved': 2,
		'arrow-body-style': 0,
		'no-const-assign': 2,
		'no-var': 0,
		'prefer-arrow-callback': 0,
		'prefer-const': 0,
		'prefer-template': 1,
		'no-template-curly-in-string': 1,
		'prefer-promise-reject-errors': [
			1,
			{
				allowEmptyReject: true
			}
		],
		'no-useless-computed-key': 1,
		'object-shorthand': [1, 'consistent-as-needed'],
		'constructor-super': 1,
		'no-class-assign': 1,
		'no-dupe-class-members': 2,
		'no-this-before-super': 2,
		'prefer-reflect': 0,
		'prefer-spread': 1,
		'require-yield': 1,
		'no-new-symbol': 2,
		'no-restricted-imports': 0,
		'no-useless-constructor': 1,
		'prefer-rest-params': 1,
		'sort-imports': 0,
		'symbol-description': 1,
		'no-duplicate-imports': 1,
		'no-useless-rename': 1,
		'class-methods-use-this': 0,
		'prefer-numeric-literals': 0,
		'no-return-await': 2,
		'no-await-in-loop': 1,
		'prefer-destructuring': 0,
		'require-await': 0,
		'no-restricted-exports': 0,
		'no-object-constructor': 0,
		'prefer-object-spread': 1,
		'prefer-named-capture-group': 1,
		'no-unused-private-class-members': 1,
		'prefer-object-has-own': 1,
		'unicorn/prefer-object-has-own': 1,
		'unicorn/prefer-at': 1,
		'unicorn/prefer-object-from-entries': 1,
		'unicorn/prefer-top-level-await': 0,
		'import/no-absolute-path': 2,
		'import/no-dynamic-require': 2,
		'import/no-webpack-loader-syntax': 2,
		'import/no-self-import': 2,
		'import/export': 2,
		'import/no-mutable-exports': 2,
		'import/no-commonjs': 2,
		'import/no-amd': 1,
		'import/exports-last': 2,
		'import/no-namespace': 1,
		'import/order': [1, { 'newlines-between': 'never' }],
		'import/prefer-default-export': 1,
		'import/no-unassigned-import': 1,
		'import/group-exports': 1,
		'import/dynamic-import-chunkname': 0,
		'import/no-import-module-exports': 2,
		'import/no-relative-packages': 0,
		'import/no-unresolved': 0,
		'import/named': 0,
		'import/default': 0,
		'import/namespace': 0,
		'import/no-restricted-paths': 0,
		'import/no-internal-modules': 0,
		'import/no-cycle': 0,
		'import/no-useless-path-segments': 0,
		'import/no-relative-parent-imports': 0,
		'import/no-named-as-default': 0,
		'import/no-named-as-default-member': 0,
		'import/no-deprecated': 0,
		'import/no-extraneous-dependencies': 0,
		'import/unambiguous': 0,
		'import/no-nodejs-modules': 0,
		'import/first': 0,
		'import/no-duplicates': 0,
		'import/newline-after-import': 0,
		'import/max-dependencies': 0,
		'import/no-named-default': 0,
		'import/no-default-export': 0,
		'import/no-anonymous-default-export': 0,
		'import/no-named-export': 0,
		'import/no-unused-modules': 0,
		'unicorn/prefer-export-from': 0,
		'unicorn/prefer-module': 2,
		'n/file-extension-in-import': 0,
		'import/extensions': [2, 'always', { ignorePackages: true }],
		'import/consistent-type-specifier-style': 0,
		'import/no-empty-named-blocks': 1,

		// Stylistic rules
		'array-bracket-newline': [1, 'consistent'],
		'array-bracket-spacing': [
			1,
			'always',
			{
				singleValue: false,
				objectsInArrays: false,
				arraysInArrays: false
			}
		],
		'array-element-newline': [1, 'consistent'],
		'arrow-parens': [2, 'always'],
		'arrow-spacing': [
			2,
			{
				before: true,
				after: true
			}
		],
		'block-spacing': [1, 'always'],
		'brace-style': [
			2,
			'1tbs',
			{
				allowSingleLine: true
			}
		],
		'comma-dangle': [1, 'never'],
		'comma-spacing': [
			2,
			{
				before: false,
				after: true
			}
		],
		'comma-style': [2, 'last'],
		'computed-property-spacing': [2, 'never'],
		'dot-location': [1, 'property'],
		'eol-last': [2, 'unix'],
		'func-call-spacing': [2, 'never'],
		'function-call-argument-newline': 0,
		'function-paren-newline': [1, 'multiline'],
		'generator-star-spacing': [
			2,
			{
				before: true,
				after: false
			}
		],
		'implicit-arrow-linebreak': [1, 'beside'],
		indent: [
			2,
			'tab',
			{
				SwitchCase: 1
			}
		],
		'jsx-quotes': 0,
		'key-spacing': [
			2,
			{
				beforeColon: false,
				afterColon: true
			}
		],
		'keyword-spacing': [
			2,
			{
				before: true,
				after: true
			}
		],
		'linebreak-style': [2, 'unix'],
		'lines-between-class-members': [1, 'always'],
		'lines-around-comment': 0,
		'max-len': 0,
		'max-statements-per-line': [
			1,
			{
				max: 4
			}
		],
		'multiline-ternary': 0,
		'new-parens': 2,
		'newline-per-chained-call': [
			1,
			{
				ignoreChainWithDepth: 4
			}
		],
		'no-confusing-arrow': [1, { allowParens: true }],
		'no-extra-parens': 0,
		'no-extra-semi': 1,
		'no-floating-decimal': 2,
		'no-mixed-operators': 2,
		'no-mixed-spaces-and-tabs': [2, 'smart-tabs'],
		'no-multi-spaces': [
			1,
			{
				exceptions: {
					Property: true,
					VariableDeclarator: true,
					ImportDeclaration: true
				}
			}
		],
		'no-multiple-empty-lines': [
			2,
			{
				max: 5,
				maxEOF: 1
			}
		],
		'no-tabs': 0,
		'no-trailing-spaces': 2,
		'no-whitespace-before-property': 1,
		'nonblock-statement-body-position': 0,
		'object-curly-newline': [
			1,
			{
				consistent: true
			}
		],
		'object-curly-spacing': [1, 'always'],
		'object-property-newline': [1, { allowAllPropertiesOnSameLine: true }],
		'one-var-declaration-per-line': 0,
		'operator-linebreak': [2, 'after'],
		'padded-blocks': 0,
		'padding-line-between-statements': [
			2,

			// Blank line always after directives
			{
				blankLine: 'always',
				prev: 'directive',
				next: '*'
			},
			{
				blankLine: 'any',
				prev: 'directive',
				next: 'directive'
			},

			// Blank line always before "module.exports" and "export" statement
			{
				blankLine: 'always',
				prev: '*',
				next: 'cjs-export'
			},
			{
				blankLine: 'never',
				prev: 'cjs-export',
				next: 'cjs-export'
			},
			{
				blankLine: 'always',
				prev: '*',
				next: 'export'
			},

			// Blank line always after last "require" and "import" statement
			{
				blankLine: 'always',
				prev: 'cjs-import',
				next: '*'
			},
			{
				blankLine: 'any',
				prev: 'cjs-import',
				next: 'cjs-import'
			},
			{
				blankLine: 'any',
				prev: 'cjs-import',
				next: 'import'
			},
			{
				blankLine: 'always',
				prev: 'import',
				next: '*'
			},
			{
				blankLine: 'any',
				prev: 'import',
				next: 'import'
			},
			{
				blankLine: 'any',
				prev: 'import',
				next: 'cjs-import'
			}
		],
		'quote-props': [
			1,
			'consistent-as-needed',
			{
				keywords: true
			}
		],
		quotes: [
			2,
			'single',
			{
				allowTemplateLiterals: true
			}
		],
		'rest-spread-spacing': [2, 'never'],
		semi: [2, 'always'],
		'semi-spacing': [
			1,
			{
				before: false,
				after: true
			}
		],
		'semi-style': [2, 'last'],
		'space-before-blocks': [2, 'always'],
		'space-before-function-paren': [2, 'always'],
		'space-in-parens': 0,
		'space-infix-ops': 1,
		'space-unary-ops': [
			1,
			{
				words: true,
				nonwords: false
			}
		],
		'spaced-comment': [
			1,
			'always',
			{
				line: {
					exceptions: ['-'],
					markers: ['/']
				},
				block: {
					exceptions: ['-']
				}
			}
		],
		'switch-colon-spacing': [1, { before: false, after: true }],
		'template-curly-spacing': [2, 'never'],
		'template-tag-spacing': [2, 'never'],
		'wrap-iife': [2, 'inside'],
		'wrap-regex': 0,
		'yield-star-spacing': [1, 'after'],
		'jsdoc/check-template-names': 0,
		'jsdoc/convert-to-jsdoc-comments': 0,
		'jsdoc/require-template': 0,
		'jsdoc/lines-before-block': 0,
		'no-useless-assignment': 1,
		'promise/spec-only': 2,
		'unicorn/consistent-empty-array-spread': 1,
		'unicorn/consistent-existence-index-check': 1,
		'unicorn/no-anonymous-default-export': 1,
		'unicorn/no-await-in-promise-methods': 2,
		'unicorn/no-invalid-fetch-options': 2,
		'unicorn/no-length-as-slice-end': 1,
		'unicorn/no-magic-array-flat-depth': 1,
		'unicorn/no-negation-in-equality-check': 1,
		'unicorn/no-single-promise-in-promise-methods': 0,
		'unicorn/prefer-global-this': 0,
		'unicorn/prefer-math-min-max': 0,
		'unicorn/prefer-string-raw': 0,
		'unicorn/prefer-structured-clone': 0,
		'promise/prefer-catch': 2
	}
};
