# `recent-version`

**Get the most recently published version of a package.**

[![NPM version][npm-image]][npm-url]
[![License][mit-image]][license]

This module fetches the most recently published version of a package, which is not necessarily the `latest` version.

## Install

```
$ npm install --save recent-version
```

## Use

```javascript
const recent = require('recent-version');

recent('rubyisms').then(version => console.log(version));
```

## License

[MIT][license]

[npm-url]: https://www.npmjs.com/package/recent-version
[npm-image]: http://img.shields.io/npm/v/recent-version.svg
[mit-image]: https://img.shields.io/badge/license-MIT-blue.svg
[license]: https://raw.githubusercontent.com/Okahyphen/recent-version/master/LICENSE
