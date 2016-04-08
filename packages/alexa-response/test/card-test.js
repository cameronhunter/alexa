import test from 'ava';
import { card } from '../src';
import { ssml } from 'alexa-ssml';

test('Simple', t => {
  t.deepEqual(card({ title: 'Title', content: 'This is the card content' }).build(), {
    version: '1.0',
    response: {
      shouldEndSession: true,
      card: { type: 'Simple', title: 'Title', content: 'This is the card content' }
    }
  });
});

test('LinkAccount', t => {
  t.deepEqual(card({ type: 'LinkAccount' }).build(), {
    version: '1.0',
    response: {
      shouldEndSession: true,
      card: { type: 'LinkAccount' }
    }
  });
});
