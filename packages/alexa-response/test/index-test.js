import test from 'ava';
import Response from '../src/index';

test('ask', t => {
  t.same(Response.ask('Hello world').build(), {
    version: '1.0',
    response: {
      shouldEndSession: false,
      outputSpeech: { type: 'PlainText', text: 'Hello world' }
    }
  });

  t.same(Response.ask('<speak><p>Hello World.</p> <p>What do you want to do today?</p></speak>', 'SSML').build(), {
    version: '1.0',
    response: {
      shouldEndSession: false,
      outputSpeech: { type: 'SSML', ssml: '<speak><p>Hello World.</p> <p>What do you want to do today?</p></speak>' }
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

  t.same(Response.say('<speak><p>Hello World.</p> <p>What do you want to do today?</p></speak>', 'SSML').build(), {
    version: '1.0',
    response: {
      shouldEndSession: true,
      outputSpeech: { type: 'SSML', ssml: '<speak><p>Hello World.</p> <p>What do you want to do today?</p></speak>' }
    }
  });
});

test('card', t => {
  t.same(Response.card('Title', 'This is the card content').build(), {
    version: '1.0',
    response: {
      shouldEndSession: true,
      card: { type: 'Simple', title: 'Title', content: 'This is the card content' }
    }
  });

  t.same(Response.card('Title', 'This is the card content', 'CustomCardType').build(), {
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
  t.same(Response.say('Hello').card('Title', 'Content').shouldEndSession(false).reprompt('Reprompt').build(), {
    version: '1.0',
    response: {
      shouldEndSession: false,
      outputSpeech: { type: 'PlainText', text: 'Hello' },
      card: { type: 'Simple', title: 'Title', content: 'Content' },
      reprompt: { outputSpeech: { type: 'PlainText', text: 'Reprompt' } }
    }
  });
});
