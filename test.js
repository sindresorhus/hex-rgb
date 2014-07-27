'use strict';
var test = require('ava');
var hexRgb = require('./');

test('hex', function (t) {
	var rgb = hexRgb('4183c4');
	t.assert(rgb[0] === 65);
	t.assert(rgb[1] === 131);
	t.assert(rgb[2] === 196);
});

test('strip leading #', function (t) {
	var rgb = hexRgb('#4183c4');
	t.assert(rgb[0] === 65);
	t.assert(rgb[1] === 131);
	t.assert(rgb[2] === 196);
});

test('shorthand', function (t) {
	var rgb = hexRgb('#000');
	t.assert(rgb[0] === 0);
	t.assert(rgb[1] === 0);
	t.assert(rgb[2] === 0);
});