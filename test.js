import test from 'ava';
import m from './';

test('async', async t => {
	const max = await m();
	t.is(typeof max, 'number');
	t.true(max > 0);
});

test('sync', t => {
	const max = m.sync();
	t.is(typeof max, 'number');
	t.true(max > 0);
});
