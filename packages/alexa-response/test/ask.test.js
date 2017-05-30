import { ask } from '../src';
import ssml from 'ssml-jsx';

test('PlainText', () => {
  expect(ask('Hello world').build()).toMatchSnapshot();
});

test('SSML', () => {
  const speech = (
    <speak>
      <p>Hello World.</p> <p>What do you want to do today?</p>
    </speak>
  );

  expect(ask(speech).build()).toMatchSnapshot();
});
