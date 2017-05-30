import ssml from '../src/index';

test('creates an object containing a type key', () => {
  const speech = <speak>Hello world</speak>;
  expect(speech).toMatchSnapshot();
});

test('creates an object containing type and props keys', () => {
  const speech = (<break strength='medium' />);
  expect(speech).toMatchSnapshot();
});

test('handles custom tags', () => {
  // eslint-disable-next-line
  const Format = (props) => Object.entries(props).reduce((state, [k, v]) => state.replace('{' + k + '}', v), props.template);
  const speech = (<Format template='Hello {name}' name='world' />);
  expect(speech).toMatchSnapshot();
});

test('creates an object containing type and children keys', () => {
  const speech = (
    <speak>
      <s>This is a sentence</s>
    </speak>
  );

  expect(speech).toMatchSnapshot();
});
