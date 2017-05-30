import Response from '../src';

test('chaining', () => {
  const response = Response.say('Hello')
                           .card({ title: 'Title', content: 'Content' })
                           .shouldEndSession(false)
                           .reprompt('Reprompt')
                           .build();

  expect(response).toMatchSnapshot();
});
