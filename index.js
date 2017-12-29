'use strict';
module.exports = function (hex) {
	if (
		typeof hex !== 'string' ||
		/[^#a-f0-9]/gi.test(hex) ||
		!/^#?[a-f0-9]{3}[a-f0-9]?$|^#?[a-f0-9]{6}([a-f0-9]{2})?$/i.test(hex)
	) {
		throw new TypeError('Expected a valid hex string');
	}

	hex = hex.replace(/^#/, '');
	let alpha = 255;

	if (hex.length === 8) {
		alpha = parseInt(hex.substring(6, 8), 16);
		hex = hex.substring(0, 6);
	}

	if (hex.length === 4) {
		alpha = parseInt(hex.substring(3, 4).repeat(2), 16);
		hex = hex.substring(0, 3);
	}

	if (hex.length === 3) {
		hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
	}

	const num = parseInt(hex, 16);
	// eslint-disable-next-line no-mixed-operators
	const result = [num >> 16, num >> 8 & 255, num & 255];
	if (alpha !== 255) {
		result.push(alpha);
	}

	return result;
};
