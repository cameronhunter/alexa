import test from 'ava';
import { ask } from '../src';
import { ssml } from 'alexa-ssml';

test('PlainText', t => {
  t.deepEqual(ask('Hello world').build(), {
    version: '1.0',
    response: {
      shouldEndSession: false,
      outputSpeech: { type: 'PlainText', text: 'Hello world' }
    }
  });
});

test('SSML', t => {
  const speech = (
    <speak>
      <p>Hello World.</p> <p>What do you want to do today?</p>
    </speak>
  );

  t.deepEqual(ask(speech).build(), {
    version: '1.0',
    response: {
      shouldEndSession: false,
      outputSpeech: { type: 'SSML', ssml: '<speak><p/>Hello World. <p/>What do you want to do today?</speak>' }
    }
  });
});
