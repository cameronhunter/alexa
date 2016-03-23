import test from 'ava';
import { reprompt } from '../src';
import { ssml } from 'alexa-ssml';

test('PlainText', t => {
  t.same(reprompt('Can you repeat that?').build(), {
    version: '1.0',
    response: {
      shouldEndSession: true,
      reprompt: { outputSpeech: { type: 'PlainText', text: 'Can you repeat that?' } }
    }
  });
});

test('SSML', t => {
  t.same(reprompt(<speak>Can you repeat that?</speak>).build(), {
    version: '1.0',
    response: {
      shouldEndSession: true,
      reprompt: { outputSpeech: { type: 'SSML', ssml: '<speak>Can you repeat that?</speak>' } }
    }
  });
});
