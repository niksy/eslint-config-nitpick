# eslint-config-nitpick

[![Build Status][ci-img]][ci]

[ESLint][eslint] config for my projects.

## Install

```sh
npm install eslint eslint-config-nitpick --save-dev
```

## Usage

Add this config to your `.eslintrc`:

<!-- prettier-ignore-start -->

```json
{
	"extends": [
		"eslint-config-nitpick"
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
		"eslint-config-nitpick",
		"eslint-config-nitpick/other-preset"
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
		"eslint-config-nitpick/browser"
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
		"eslint-config-nitpick/next"
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
		"eslint-config-nitpick/tests"
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
		"eslint-config-nitpick/jsx", // For JSX rules
		"eslint-config-nitpick/react"
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
		"eslint-config-nitpick/jsx"
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
		"eslint-config-nitpick/jsx", // If you use JSX
		"eslint-config-nitpick/vue"
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
		"eslint-config-nitpick/typescript"
	]
}
```

<!-- prettier-ignore-end -->

## License

MIT © [Ivan Nikolić](http://ivannikolic.com)

<!-- prettier-ignore-start -->

[ci]: https://travis-ci.com/nitpick/eslint-config-nitpick
[ci-img]: https://travis-ci.com/nitpick/eslint-config-nitpick.svg?branch=master
[eslint]: http://eslint.org/
[eslint-extends]: http://eslint.org/docs/user-guide/configuring#extending-configuration-files
[tc39-proposals]: https://github.com/tc39/proposals#active-proposals

<!-- prettier-ignore-end -->
