import { shouldEndSession } from '../src';

test('true', () => {
  expect(shouldEndSession(true).build()).toMatchSnapshot();
});

test('false', () => {
  expect(shouldEndSession(false).build()).toMatchSnapshot();
});
