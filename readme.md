# hex-rgb [![Build Status](https://travis-ci.org/sindresorhus/hex-rgb.svg?branch=master)](https://travis-ci.org/sindresorhus/hex-rgb)

> Convert HEX color to RGB


## Install

```sh
$ npm install --save hex-rgb
```


## Usage

```js
var hexRgb = require('hex-rgb');

hexRgb('4183c4');
//=> [65, 131, 196]

hexRgb('#4183c4');
//=> [65, 131, 196]

hexRgb('#fff');
//=> [255, 255, 255]
```


## Related

See [rgb-hex](https://github.com/sindresorhus/rgb-hex) for the inverse.


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
