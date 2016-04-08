import test from 'ava';
import { say } from '../src';
import { ssml } from 'alexa-ssml';

test('PlainText', t => {
  t.deepEqual(say('Hello world').build(), {
    version: '1.0',
    response: {
      shouldEndSession: true,
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

  t.deepEqual(say(speech).build(), {
    version: '1.0',
    response: {
      shouldEndSession: true,
      outputSpeech: { type: 'SSML', ssml: '<speak><p/>Hello World. <p/>What do you want to do today?</speak>' }
    }
  });
});
