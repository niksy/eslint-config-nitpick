/** @type {import('lint-staged').Configuration} */
export default {
	'*.{js,d.ts}': ['eslint --fix'],
	'*.(md|json|yml)': ['prettier --ignore-path .gitignore --write'],
	'.!(npm)*rc': ['prettier --ignore-path .gitignore --parser json --write']
};
