import test from 'ava';
import Request from '../../src/Request';
import HelloWorld from './index';

const DefaultRequest = Request.session({ application: { applicationId: 'my-app-id' } });

test('LaunchRequest', t => {
  const event = DefaultRequest.launchRequest().build();

  return HelloWorld(event).then(response => {
    t.deepEqual(response, {
      version: '1.0',
      response: {
        shouldEndSession: false,
        outputSpeech: { type: 'PlainText', text: 'Welcome to the Alexa Skills Kit, you can say hello' },
        reprompt: { outputSpeech: { type: 'PlainText', text: 'You can say hello' } }
      }
    });
  });
});

test('HelloWorldIntent', t => {
  const event = DefaultRequest.intent('HelloWorldIntent').build();

  return HelloWorld(event).then(response => {
    t.deepEqual(response, {
      version: '1.0',
      response: {
        shouldEndSession: true,
        outputSpeech: { type: 'PlainText', text: 'Hello World!' },
        card: { type: 'Simple', title: 'Greeter', content: 'Hello World!' }
      }
    });
  });
});

test('AMAZON.HelpIntent', t => {
  const event = DefaultRequest.intent('AMAZON.HelpIntent').build();

  return HelloWorld(event).then(response => {
    t.deepEqual(response, {
      version: '1.0',
      response: {
        shouldEndSession: false,
        outputSpeech: { type: 'PlainText', text: 'You can say hello to me!' },
        reprompt: { outputSpeech: { type: 'PlainText', text: 'You can say hello to me!' } }
      }
    });
  });
});

test('Credits', t => {
  const event = DefaultRequest.intent('Credits').build();

  return HelloWorld(event).then(response => {
    t.deepEqual(response, {
      version: '1.0',
      response: {
        shouldEndSession: true,
        outputSpeech: { type: 'PlainText', text: 'Hello World was created by Cameron Hunter' },
        card: { type: 'Simple', title: 'Hello World', content: 'Credits: Cameron Hunter <hello@cameronhunter.co.uk> (http://cameronhunter.co.uk)' }
      }
    });
  });
});
