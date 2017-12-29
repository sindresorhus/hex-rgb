'use strict';
import test from 'ava';
import hexRgb from './';

const reject = (t, string) => {
	return t.throws(() => {
		hexRgb(string);
	}, TypeError).message;
};

test('rejects', t => {
	const message = 'Expected a valid hex string';
	t.is(reject(t, 123), message);
	t.is(reject(t, '🦄'), message);
	t.is(reject(t, '#12🦄'), message);
	t.is(reject(t, '#12345'), message);
	t.is(reject(t, '#1234567'), message);
	t.is(reject(t, '#123456789'), message);
});

test('hex', t => {
	t.is(hexRgb('4183c4').join(','), '65,131,196');
	t.is(hexRgb('#4183c4').join(','), '65,131,196');
	t.is(hexRgb('#000').join(','), '0,0,0');
});

test('hex with alpha', t => {
	t.is(hexRgb('4183c488').join(','), '65,131,196,136');
	t.is(hexRgb('#4183c488').join(','), '65,131,196,136');
	t.is(hexRgb('#0008').join(','), '0,0,0,136');
	t.is(hexRgb('#000f').join(','), '0,0,0');
});
