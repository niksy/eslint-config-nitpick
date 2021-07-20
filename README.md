# eslint-config-niksy

[![Build Status][ci-img]][ci]

[ESLint][eslint] config for my projects.

## Install

```sh
npm install eslint@7 --save-dev && npx install-peerdeps eslint-config-niksy --dev
```

If you’re using npm <5, install this package and each peer dependancy manually
or use [install-peerdeps][install-peerdeps] CLI.

## Usage

Add this config to your `.eslintrc`:

<!-- prettier-ignore-start -->

```json
{
	"extends": [
		"niksy"
	]
}
```

<!-- prettier-ignore-end -->

If you’re using [presets](#presets), **it’s highly recommended to apply default
preset:**

<!-- prettier-ignore-start -->

```json
{
	"extends": [
		"niksy",
		"niksy/other-preset"
	]
}
```

<!-- prettier-ignore-end -->

## Presets

In addition to default preset, there are also specific presets. You can apply
multiple presets with [ESLint `extends` option][eslint-extends].

### Browser

Browser specific rules.

<!-- prettier-ignore-start -->

```json
{
	"extends": [
		"niksy/browser"
	]
}
```

<!-- prettier-ignore-end -->

### Next

Features usually available in next major Node.js version or [latest
proposals][tc39-proposals].

<!-- prettier-ignore-start -->

```json
{
	"extends": [
		"niksy/next"
	]
}
```

<!-- prettier-ignore-end -->

### Testing

Rules for testing frameworks (e.g. Mocha).

<!-- prettier-ignore-start -->

```json
{
	"extends": [
		"niksy/tests"
	]
}
```

<!-- prettier-ignore-end -->

### React

React specific rules.

<!-- prettier-ignore-start -->

```json
{
	"extends": [
		"niksy/jsx", // For JSX rules
		"niksy/react"
	]
}
```

<!-- prettier-ignore-end -->

### JSX

JSX specific rules.

<!-- prettier-ignore-start -->

```json
{
	"extends": [
		"niksy/jsx"
	]
}
```

<!-- prettier-ignore-end -->

### Vue

Vue specific rules.

<!-- prettier-ignore-start -->

```json
{
	"extends": [
		"niksy/jsx", // If you use JSX
		"niksy/vue"
	]
}
```

<!-- prettier-ignore-end -->

### TypeScript

TypeScript specific rules.

<!-- prettier-ignore-start -->

```json
{
	"extends": [
		"niksy/typescript"
	]
}
```

<!-- prettier-ignore-end -->

## License

MIT © [Ivan Nikolić](http://ivannikolic.com)

<!-- prettier-ignore-start -->

[ci]: https://travis-ci.com/niksy/eslint-config-niksy
[ci-img]: https://travis-ci.com/niksy/eslint-config-niksy.svg?branch=master
[eslint]: http://eslint.org/
[eslint-extends]: http://eslint.org/docs/user-guide/configuring#extending-configuration-files
[tc39-proposals]: https://github.com/tc39/proposals#active-proposals
[install-peerdeps]: https://www.npmjs.com/package/install-peerdeps

<!-- prettier-ignore-end -->
