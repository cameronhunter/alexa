import Response from '../src';
import ssml from 'ssml-jsx';

test('PlainText', () => {
  const response = Response.build({
    ask: 'Does this work?',
    reprompt: 'Well? Does it?',
    card: { title: 'Test', content: 'Testing if this thing works' }
  });

  expect(response.build()).toMatchSnapshot();
});

test('SSML', () => {
  const response = Response.build({
    ask: (<speak>Does this work?</speak>),
    reprompt: 'Well? Does it?',
    card: { title: 'Test', content: 'Testing if this thing works' }
  });

  expect(response.build()).toMatchSnapshot();
});
