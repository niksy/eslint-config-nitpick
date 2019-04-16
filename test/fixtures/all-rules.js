'use strict';

const path = require('path');

module.exports = {
	'extends': [
		'./',
		'./browser',
		'./next',
		'./tests',
		'./react',
		'./jsx',
		'./vue'
	].map(( m ) => {
		return require.resolve(path.resolve(process.cwd(), m));
	}),

	// Plugin packs can contain many rules, but sometimes you only want to use
	// one rule and ignore all the rest (e.g. for eslint-plugin-node use only
	// node/no-unsupported-features). Here you can define all rules you want to
	// ignore.
	rules: {
		'node/no-deprecated-api': 0,
		'node/no-missing-import': 0,
		'node/no-missing-require': 0,
		'node/no-unpublished-import': 0,
		'node/no-unpublished-require': 0,
		'node/no-unpublished-bin': 0,
		'node/shebang': 0,
		'node/no-hide-core-modules': 0,
		'node/no-extraneous-import': 0,
		'node/no-extraneous-require': 0,
		'node/no-unsupported-features/es-builtins': 0,
		'node/no-unsupported-features/es-syntax': 0,
		'node/no-unsupported-features/node-builtins': 0,
		'node/prefer-global/buffer': 0,
		'node/prefer-global/console': 0,
		'node/prefer-global/process': 0,
		'node/prefer-global/text-decoder': 0,
		'node/prefer-global/text-encoder': 0,

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
		'import/extensions': 0,
		'import/newline-after-import': 0,
		'import/max-dependencies': 0,
		'import/no-named-default': 0,
		'import/no-default-export': 0,
		'import/no-anonymous-default-export': 0,
		'import/no-named-export': 0,
		'import/no-unused-modules': 0,

		'mocha/prefer-arrow-callback': 0,

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
		'vue/match-component-file-name': 0,
		'vue/no-boolean-default': 0,
		'vue/no-restricted-syntax': 0,
		'vue/require-direct-export': 2,
		'vue/use-v-on-exact': 2,
		'vue/v-on-function-call': [2, 'never']
	}
};
