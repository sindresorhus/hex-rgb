declare namespace hexRgb {
	interface Options {
		/**
		The RGB output format.

		Note that when using the `css` format, the value of the alpha channel is rounded to two decimal places.

		@default 'object'
		*/
		readonly format?: 'object' | 'array' | 'css';
	}

	interface RgbaObject {
		red: number;
		green: number;
		blue: number;
		alpha: number;
	}

	// TODO: Use named tuples here when TS 4 is more commonly used.
	type RgbaTuple = [number, number, number, number];
}

/**
Convert HEX color to RGBA.

@param hex - The color in HEX format. Leading `#` is optional.

@example
```
import hexRgb = require('hex-rgb');

hexRgb('4183c4');
//=> {red: 65, green: 131, blue: 196, alpha: 1}

hexRgb('#4183c4');
//=> {red: 65, green: 131, blue: 196, alpha: 1}

hexRgb('#fff');
//=> {red: 255, green: 255, blue: 255, alpha: 1}

hexRgb('#22222299');
//=> {red: 34, green: 34, blue: 34, alpha: 0.6}

hexRgb('#0006');
//=> {red: 0, green: 0, blue: 0, alpha: 0.4}

hexRgb('#cd2222cc');
//=> {red: 205, green: 34, blue: 34, alpha: 0.8}

hexRgb('#cd2222cc', {format: 'array'});
//=> [205, 34, 34, 0.8]

hexRgb('#cd2222cc', {format: 'css'});
//=> 'rgb(205 34 34 / 80%)'

hexRgb('#000', {format: 'css'});
//=> 'rgb(0 0 0)'
```
*/
declare function hexRgb(hex: string): hexRgb.RgbaObject;
declare function hexRgb(hex: string, options: hexRgb.Options & {format: 'object'}): hexRgb.RgbaObject;
declare function hexRgb(hex: string, options: hexRgb.Options & {format: 'array'}): hexRgb.RgbaTuple;
declare function hexRgb(hex: string, options: hexRgb.Options & {format: 'css'}): string;

export = hexRgb;
