import test from 'ava';
import ssml, { renderToString } from '../src/index';

test('Renders <speak> tags as a string', t => {
  const speech = renderToString(<speak>Hello world</speak>);

  t.deepEqual(speech, '<speak>Hello world</speak>');
});

test('Renders <s> tags as a string', t => {
  const speech = renderToString(
    <speak>
      <s>Hello world</s>
    </speak>
  );

  t.deepEqual(speech, '<speak><s>Hello world</s></speak>');
});

test('Renders <p> tags as a string', t => {
  const speech = renderToString(
    <speak>
      <p>Hello world</p>
    </speak>
  );

  t.deepEqual(speech, '<speak><p>Hello world</p></speak>');
});

test('Renders <break> tags as a string', t => {
  const speech = renderToString(
    <speak>
      <s>Hello world</s>
      <break time='2s' />
    </speak>
  );

  t.deepEqual(speech, '<speak><s>Hello world</s><break time="2s"/></speak>');
});

test('Renders <say-as> tags as a string', t => {
  const speech = renderToString(
    <speak>
      <say-as interpret-as='characters'>Hello world</say-as>
    </speak>
  );

  t.deepEqual(speech, '<speak><say-as interpret-as="characters">Hello world</say-as></speak>');
});

test('Only renders outer <speak> tags', t => {
  const speech = renderToString(
    <speak>
      <s>Hello</s>
      <speak>
          <s>world</s>
      </speak>
    </speak>
  );

  t.deepEqual(speech, '<speak><s>Hello</s><s>world</s></speak>');
});

test('Renders custom tags', t => {
  const Verbose = (props) => props.verbose ? props.children : null; // eslint-disable-line

  const speech = renderToString(
    <speak>
      <s>Hello world</s>
      <Verbose verbose={true}>
        <s>How are you doing today?</s>
      </Verbose>
    </speak>
  );

  t.deepEqual(speech, '<speak><s>Hello world</s><s>How are you doing today?</s></speak>');
});

test('Renders deeply', t => {
  const speech = renderToString(
    <speak>
      <p>
        <s>Hello</s>
        <s>world</s>
      </p>
    </speak>
  );

  t.deepEqual(speech, '<speak><p><s>Hello</s><s>world</s></p></speak>');
});
