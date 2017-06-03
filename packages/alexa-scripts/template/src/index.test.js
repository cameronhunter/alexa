import Skill from './index';
import Request from 'alexa-request';

test('Launch intent', () => {
  const event = Request.launchRequest().build();
  return expect(Skill(event)).resolves.toMatchSnapshot();
});

test('Hello intent', () => {
  const event = Request.intent('hello', { name: 'world' }).build();
  return expect(Skill(event)).resolves.toMatchSnapshot();
});

test('Help intent', () => {
  const event = Request.intent('AMAZON.HelpIntent').build();
  return expect(Skill(event)).resolves.toMatchSnapshot();
});

test('Stop intent', () => {
  const event = Request.intent('AMAZON.StopIntent').build();
  return expect(Skill(event)).resolves.toMatchSnapshot();
});

test('Cancel intent', () => {
  const event = Request.intent('AMAZON.CancelIntent').build();
  return expect(Skill(event)).resolves.toMatchSnapshot();
});
