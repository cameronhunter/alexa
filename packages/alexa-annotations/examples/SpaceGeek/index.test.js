import Request from 'alexa-request';
import SpaceGeek from './index';

beforeEach(() => {
  jest.spyOn(Math, 'random').mockImplementation(() => 0.7123406182508916);
});

afterEach(() => {
  jest.resetAllMocks();
  jest.clearAllMocks();
});

test('LaunchRequest', () => {
  const event = Request.launchRequest().build();
  return expect(SpaceGeek(event)).resolves.toMatchSnapshot();
});

test('GetNewFactIntent', () => {
  const event = Request.intent('GetNewFactIntent').build();
  return expect(SpaceGeek(event)).resolves.toMatchSnapshot();
});
