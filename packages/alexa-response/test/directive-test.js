import test from 'ava';
import { directive, AudioPlayer } from '../src';
import { ssml } from 'alexa-ssml';

test('Add single directive', t => {
  t.deepEqual(directive(AudioPlayer.stop()).build(), {
    version: '1.0',
    response: {
      shouldEndSession: true,
      directives: [
          { type: 'AudioPlayer.Stop' }
      ]
    }
  });
});

test('Add multiple directives', t => {
  const actual = directive(
    AudioPlayer.play({ url: 'http://stream-1.url' }),
    AudioPlayer.enqueue({ url: 'http://stream-2.url' })
  );

  t.deepEqual(actual.build(), {
    version: '1.0',
    response: {
      shouldEndSession: true,
      directives: [
          { type: 'AudioPlayer.Play', playBehavior: 'REPLACE_ALL', audioItem: { stream: { url: 'http://stream-1.url' } } },
          { type: 'AudioPlayer.Play', playBehavior: 'ENQUEUE', audioItem: { stream: { url: 'http://stream-2.url' } } }
      ]
    }
  });
});
