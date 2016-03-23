import test from 'ava';
import { shouldEndSession } from '../src';

test('true', t => {
  t.same(shouldEndSession(true).build(), {
    version: '1.0',
    response: {
      shouldEndSession: true
    }
  });
});

test('false', t => {
  t.same(shouldEndSession(false).build(), {
    version: '1.0',
    response: {
      shouldEndSession: false
    }
  });
});
