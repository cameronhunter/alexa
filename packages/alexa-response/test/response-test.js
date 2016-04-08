import test from 'ava';
import Response from '../src';

test('chaining', t => {
  const response = Response.say('Hello')
                           .card({ title: 'Title', content: 'Content' })
                           .shouldEndSession(false)
                           .reprompt('Reprompt')
                           .build();

  t.deepEqual(response, {
    version: '1.0',
    response: {
      shouldEndSession: false,
      outputSpeech: { type: 'PlainText', text: 'Hello' },
      card: { type: 'Simple', title: 'Title', content: 'Content' },
      reprompt: { outputSpeech: { type: 'PlainText', text: 'Reprompt' } }
    }
  });
});
