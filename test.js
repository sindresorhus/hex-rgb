import test from 'ava';
import hexRgb from '.';

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

test('hex; output object', t => {
	const options = {format: 'object'};
	t.deepEqual(hexRgb('#4183c4', options), {red: 65, green: 131, blue: 196, alpha: 255});
	t.deepEqual(hexRgb('#000', options), {red: 0, green: 0, blue: 0, alpha: 255});
	t.deepEqual(hexRgb('#0006', options), {red: 0, green: 0, blue: 0, alpha: 0.4});
	t.deepEqual(hexRgb('4183c488', options), {red: 65, green: 131, blue: 196, alpha: 0.5333333333333333});
	t.deepEqual(hexRgb('#4183c488'), {red: 65, green: 131, blue: 196, alpha: 0.5333333333333333});
	t.deepEqual(hexRgb('4183c4'), {red: 65, green: 131, blue: 196, alpha: 255});
	t.deepEqual(hexRgb('#000f'), {red: 0, green: 0, blue: 0, alpha: 1});
	t.deepEqual(hexRgb('#22222299'), {red: 34, green: 34, blue: 34, alpha: 0.6});
	t.deepEqual(hexRgb('#cd2222cc'), {red: 205, green: 34, blue: 34, alpha: 0.8});
});

test('hex; output array', t => {
	const options = {format: 'array'};
	t.deepEqual(hexRgb('4183c4', options), [65, 131, 196, 255]);
	t.deepEqual(hexRgb('#4183c4', options), [65, 131, 196, 255]);
	t.deepEqual(hexRgb('#000', options), [0, 0, 0, 255]);
	t.deepEqual(hexRgb('4183c488', options), [65, 131, 196, 0.5333333333333333]);
	t.deepEqual(hexRgb('#4183c488', options), [65, 131, 196, 0.5333333333333333]);
	t.deepEqual(hexRgb('#0008', options), [0, 0, 0, 0.5333333333333333]);
	t.deepEqual(hexRgb('#000f', options), [0, 0, 0, 1]);
});
