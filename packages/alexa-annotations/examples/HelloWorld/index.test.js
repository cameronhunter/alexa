import Request from 'alexa-request';
import HelloWorld from './index';

const DefaultRequest = Request.session({
  application: { applicationId: 'my-app-id' }
});

test('LaunchRequest', () => {
  const event = DefaultRequest.launchRequest().build();
  return expect(HelloWorld(event)).resolves.toMatchSnapshot();
});

test('HelloWorldIntent', () => {
  const event = DefaultRequest.intent('HelloWorldIntent').build();
  return expect(HelloWorld(event)).resolves.toMatchSnapshot();
});

test('AMAZON.HelpIntent', () => {
  const event = DefaultRequest.intent('AMAZON.HelpIntent').build();
  return expect(HelloWorld(event)).resolves.toMatchSnapshot();
});

test('Credits', () => {
  const event = DefaultRequest.intent('Credits').build();
  return expect(HelloWorld(event)).resolves.toMatchSnapshot();
});
