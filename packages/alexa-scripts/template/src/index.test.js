import Skill from './index';
import Request from 'alexa-request';

test('LaunchRequest', () => {
  const event = Request.launchRequest().build();

  return expect(Skill(event)).resolves.toMatchSnapshot();
});

test('Hello intent', () => {
  const event = Request.intent('hello', { name: 'world' }).build();

  return expect(Skill(event)).resolves.toMatchSnapshot();
});
