# eslint-config-nitpick

[![Build Status][ci-img]][ci]

[ESLint][eslint] config for my projects.

## Install

```sh
npm install eslint@8 eslint-config-nitpick --save-dev
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

### Vue

Vue specific rules.

<!-- prettier-ignore-start -->

```json
{
	"extends": [
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

[ci]: https://github.com/niksy/eslint-config-nitpick/actions?query=workflow%3ACI
[ci-img]: https://github.com/niksy/eslint-config-nitpick/workflows/CI/badge.svg?branch=master
[eslint]: http://eslint.org/
[eslint-extends]: http://eslint.org/docs/user-guide/configuring#extending-configuration-files
[tc39-proposals]: https://github.com/tc39/proposals#active-proposals

<!-- prettier-ignore-end -->
