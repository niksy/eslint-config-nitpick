# eslint-config-niksy

[![Build Status][ci-img]][ci]

[ESLint][eslint] config for my projects.

## Install

```sh
npm install eslint eslint-config-niksy --save-dev
```

## Usage

Add this config to your `.eslintrc`:

```json
{
	"extends": [
		"niksy"
	]
}
```

If you’re using [presets](#presets), **it’s highly recommended to apply default preset:**

```json
{
	"extends": [
		"niksy",
		"niksy/other-preset"
	]
}
```

## Presets

In addition to default preset, there are also specific presets. You can apply
multiple presets with [ESLint `extends` option][eslint-extends].

### Browser

Browser specific rules.

```json
{
	"extends": [
		"niksy/browser"
	]
}
```

### Next

Features usually available in next major Node.js version or [latest proposals][tc39-proposals].

```json
{
	"extends": [
		"niksy/next"
	]
}
```

### Testing

Rules for testing frameworks (e.g. Mocha).

```json
{
	"extends": [
		"niksy/tests"
	]
}
```

### React

React (JSX) specific rules.

```json
{
	"extends": [
		"niksy/react"
	]
}
```

### Vue

Vue (JSX) specific rules.

```json
{
	"extends": [
		"niksy/vue"
	]
}
```

## License

MIT © [Ivan Nikolić](http://ivannikolic.com)

[ci]: https://travis-ci.org/niksy/eslint-config-niksy
[ci-img]: https://travis-ci.org/niksy/eslint-config-niksy.svg?branch=master
[eslint]: http://eslint.org/
[eslint-extends]: http://eslint.org/docs/user-guide/configuring#extending-configuration-files
[tc39-proposals]: https://github.com/tc39/proposals#active-proposals
