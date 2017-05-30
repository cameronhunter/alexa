import { say } from '../src';
import ssml from 'ssml-jsx';

test('PlainText', () => {
  expect(say('Hello world').build()).toMatchSnapshot();
});

test('SSML', () => {
  const speech = (
    <speak>
      <p>Hello World.</p> <p>What do you want to do today?</p>
    </speak>
  );

  expect(say(speech).build()).toMatchSnapshot();
});
