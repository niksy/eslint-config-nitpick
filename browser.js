import globals from 'globals';
import pluginUnicorn from 'eslint-plugin-unicorn';
import { defineConfig } from 'eslint/config';

const nodeGlobalsDisabled = Object.fromEntries(
	Object.entries(globals.node).map(([key]) => [key, 'off'])
);

export default defineConfig({
	languageOptions: {
		globals: {
			...nodeGlobalsDisabled,
			...globals.browser
		}
	},
	plugins: {
		unicorn: pluginUnicorn
	},
	rules: {
		'no-console': 2,
		'no-implicit-globals': 2,
		'unicorn/no-document-cookie': 2,
		'unicorn/require-post-message-target-origin': 2,
		'unicorn/prefer-dom-node-append': 0,
		'unicorn/prefer-dom-node-remove': 0,
		'unicorn/dom-node-dataset': 1,
		'unicorn/prefer-dom-node-text-content': 1,
		'unicorn/prefer-modern-dom-apis': 1,
		'unicorn/better-dom-traversing': 1,
		'unicorn/no-canvas-to-image': 0,
		'unicorn/no-incorrect-query-selector': 1,
		'unicorn/no-invalid-file-input-accept': 1,
		'unicorn/no-late-current-target-access': 1,
		'unicorn/prefer-classlist-toggle': 1,
		'unicorn/require-css-escape': 0,
		'unicorn/require-passive-events': 1
	}
});
