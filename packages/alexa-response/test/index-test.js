import test from 'ava';
import { ssml } from 'alexa-ssml';
import Response from '../src/index';

test('ask', t => {
  t.same(Response.ask('Hello world').build(), {
    version: '1.0',
    response: {
      shouldEndSession: false,
      outputSpeech: { type: 'PlainText', text: 'Hello world' }
    }
  });

  const speech = (
    <speak>
      <p>Hello World.</p> <p>What do you want to do today?</p>
    </speak>
  );

  t.same(Response.ask(speech).build(), {
    version: '1.0',
    response: {
      shouldEndSession: false,
      outputSpeech: { type: 'SSML', ssml: '<speak><p/>Hello World. <p/>What do you want to do today?</speak>' }
    }
  });
});

test('say', t => {
  t.same(Response.say('Hello world').build(), {
    version: '1.0',
    response: {
      shouldEndSession: true,
      outputSpeech: { type: 'PlainText', text: 'Hello world' }
    }
  });

  const speech = (
    <speak>
      <p>Hello World.</p> <p>What do you want to do today?</p>
    </speak>
  );

  t.same(Response.say(speech).build(), {
    version: '1.0',
    response: {
      shouldEndSession: true,
      outputSpeech: { type: 'SSML', ssml: '<speak><p/>Hello World. <p/>What do you want to do today?</speak>' }
    }
  });
});

test('card', t => {
  t.same(Response.card({ title: 'Title', content: 'This is the card content'}).build(), {
    version: '1.0',
    response: {
      shouldEndSession: true,
      card: { type: 'Simple', title: 'Title', content: 'This is the card content' }
    }
  });

  t.same(Response.card({ title: 'Title', content: 'This is the card content', type: 'CustomCardType'}).build(), {
    version: '1.0',
    response: {
      shouldEndSession: true,
      card: { type: 'CustomCardType', title: 'Title', content: 'This is the card content' }
    }
  });
});

test('reprompt', t => {
  t.same(Response.reprompt('Can you repeat that?').build(), {
    version: '1.0',
    response: {
      shouldEndSession: true,
      reprompt: { outputSpeech: { type: 'PlainText', text: 'Can you repeat that?' } }
    }
  });
});

test('shouldEndSession', t => {
  t.same(Response.shouldEndSession(true).build(), {
    version: '1.0',
    response: {
      shouldEndSession: true
    }
  });

  t.same(Response.shouldEndSession(false).build(), {
    version: '1.0',
    response: {
      shouldEndSession: false
    }
  });
});

test('chaining', t => {
  const response = Response.say('Hello')
                           .card({ title: 'Title', content: 'Content' })
                           .shouldEndSession(false)
                           .reprompt('Reprompt')
                           .build();

  t.same(response, {
    version: '1.0',
    response: {
      shouldEndSession: false,
      outputSpeech: { type: 'PlainText', text: 'Hello' },
      card: { type: 'Simple', title: 'Title', content: 'Content' },
      reprompt: { outputSpeech: { type: 'PlainText', text: 'Reprompt' } }
    }
  });
});
