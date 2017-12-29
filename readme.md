# hex-rgb [![Build Status](https://travis-ci.org/sindresorhus/hex-rgb.svg?branch=master)](https://travis-ci.org/sindresorhus/hex-rgb)

> Convert HEX color to RGB(A)


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

hexRgb('#4183c488');
//=> [65, 131, 196, 136]

hexRgb('#0008');
//=> [0, 0, 0, 136]
```


## Related

See [rgb-hex](https://github.com/sindresorhus/rgb-hex) for the inverse.


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
