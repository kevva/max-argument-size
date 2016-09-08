import test from 'ava';
import m from './';

test(async t => {
	const max = await m();
	t.is(typeof max, 'number');
	t.true(max > 0);
});
