import test from 'ava';
import { directive } from '../src';
import { ssml } from 'alexa-ssml';

test('Add directive', t => {
  t.deepEqual(directive({ type: 'AudioPlayer.Stop' }).build(), {
    version: '1.0',
    response: {
      shouldEndSession: true,
      directives: [
          { type: 'AudioPlayer.Stop' }
      ]
    }
  });
});
