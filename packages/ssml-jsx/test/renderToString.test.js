import ssml, { renderToString } from '../src/index';

test('Renders <speak> tags as a string', () => {
  const speech = renderToString(<speak>Hello world</speak>);

  expect(speech).toMatchSnapshot();
});

test('Renders <s> tags as a string', () => {
  const speech = renderToString(
    <speak>
      <s>Hello world</s>
    </speak>
  );

  expect(speech).toMatchSnapshot();
});

test('Renders <p> tags as a string', () => {
  const speech = renderToString(
    <speak>
      <p>Hello world</p>
    </speak>
  );

  expect(speech).toMatchSnapshot();
});

test('Renders <break> tags as a string', () => {
  const speech = renderToString(
    <speak>
      <s>Hello world</s>
      <break time='2s' />
    </speak>
  );

  expect(speech).toMatchSnapshot();
});

test('Renders <say-as> tags as a string', () => {
  const speech = renderToString(
    <speak>
      <say-as interpret-as='characters'>Hello world</say-as>
    </speak>
  );

  expect(speech).toMatchSnapshot();
});

test('Renders <amazon:effect> tags as a string', () => {
  const speech = renderToString(
    <speak>
      <amazon:effect name='whispered'>Hello world</amazon:effect>
    </speak>
  );

  expect(speech).toMatchSnapshot();
});

test('Only renders outer <speak> tags', () => {
  const speech = renderToString(
    <speak>
      <s>Hello</s>
      <speak>
          <s>world</s>
      </speak>
    </speak>
  );

  expect(speech).toMatchSnapshot();
});

test('Renders custom tags', () => {
  // eslint-disable-next-line
  const Verbose = (props) => props.verbose ? props.children : null;

  const speech = renderToString(
    <speak>
      <s>Hello world</s>
      <Verbose verbose={true}>
        <s>How are you doing today?</s>
      </Verbose>
    </speak>
  );

  expect(speech).toMatchSnapshot();
});

test('Renders deeply', () => {
  const speech = renderToString(
    <speak>
      <p>
        <s>Hello</s>
        <s>world</s>
      </p>
    </speak>
  );

  expect(speech).toMatchSnapshot();
});
