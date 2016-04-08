import test from 'ava';
import Response from '../src';
import { ssml } from 'alexa-ssml';

test('PlainText', t => {
  const response = Response.build({
    ask: 'Does this work?',
    reprompt: 'Well? Does it?',
    card: { title: 'Test', content: 'Testing if this thing works' }
  });

  t.deepEqual(response.build(), {
    version: '1.0',
    response: {
      shouldEndSession: false,
      outputSpeech: { type: 'PlainText', text: 'Does this work?' },
      reprompt: { outputSpeech: { type: 'PlainText', text: 'Well? Does it?' } },
      card: { type: 'Simple', title: 'Test', content: 'Testing if this thing works' }
    }
  });
});

test('SSML', t => {
  const response = Response.build({
    ask: (<speak>Does this work?</speak>),
    reprompt: 'Well? Does it?',
    card: { title: 'Test', content: 'Testing if this thing works' }
  });

  t.deepEqual(response.build(), {
    version: '1.0',
    response: {
      shouldEndSession: false,
      outputSpeech: { type: 'SSML', ssml: '<speak>Does this work?</speak>' },
      reprompt: { outputSpeech: { type: 'PlainText', text: 'Well? Does it?' } },
      card: { type: 'Simple', title: 'Test', content: 'Testing if this thing works' }
    }
  });
});
