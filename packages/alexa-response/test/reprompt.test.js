import { reprompt } from '../src';
import ssml from 'ssml-jsx';

test('PlainText', () => {
  expect(reprompt('Can you repeat that?').build()).toMatchSnapshot();
});

test('SSML', () => {
  expect(
    reprompt(<speak>Can you repeat that?</speak>).build()
  ).toMatchSnapshot();
});
