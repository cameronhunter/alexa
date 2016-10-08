import test from 'ava';
import sinon from 'sinon';
import Request from '../../src/Request';
import SpaceGeek from './index';

test.before(() => {
  sinon.stub(Math, 'random', () => 0.7123406182508916);
});

test.after(() => {
  Math.random.restore();
});

test('LaunchRequest', t => {
  const event = Request.launchRequest().build();

  return SpaceGeek(event).then(response => {
    t.deepEqual(response, {
      version: '1.0',
      response: {
        shouldEndSession: true,
        outputSpeech: { type: 'PlainText', text: 'Here\'s your space fact: A total solar eclipse can happen once every 1 to 2 years. This makes them a rare event.' },
        card: { type: 'Simple', title: 'SpaceGeek', content: 'Here\'s your space fact: A total solar eclipse can happen once every 1 to 2 years. This makes them a rare event.' }
      }
    });
  });
});

test('GetNewFactIntent', t => {
  const event = Request.intent('GetNewFactIntent').build();

  return SpaceGeek(event).then(response => {
    t.deepEqual(response, {
      version: '1.0',
      response: {
        shouldEndSession: true,
        outputSpeech: { type: 'PlainText', text: 'Here\'s your space fact: A total solar eclipse can happen once every 1 to 2 years. This makes them a rare event.' },
        card: { type: 'Simple', title: 'SpaceGeek', content: 'Here\'s your space fact: A total solar eclipse can happen once every 1 to 2 years. This makes them a rare event.' }
      }
    });
  });
});
