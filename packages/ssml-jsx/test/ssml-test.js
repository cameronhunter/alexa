import test from 'ava';
import ssml from '../src/index';

test('creates an object containing a type key', t => {
  const speech = <speak>Hello world</speak>;
  t.deepEqual(speech, {
    elementName: 'speak',
    attributes: {},
    children: ['Hello world']
  });
});

test('creates an object containing type and props keys', t => {
  const speech = (<break strength='medium' />);
  t.deepEqual(speech, {
    elementName: 'break',
    attributes: {
      strength: 'medium'
    },
    children: null
  });
});

test('handles custom tags', t => {
  const Format = (props) => Object.entries(props).reduce((state, [k, v]) => state.replace('{' + k + '}', v), props.template);
  const speech = (<Format template='Hello {name}' name='world' />);
  t.deepEqual(speech, {
    elementName: Format,
    attributes: {
      template: 'Hello {name}',
      name: 'world'
    },
    children: null
  });
});

test('creates an object containing type and children keys', t => {
  const speech = (
    <speak>
      <s>This is a sentence</s>
    </speak>
  );

  t.deepEqual(speech, {
    elementName: 'speak',
    attributes: {},
    children: [
      {
        elementName: 's',
        attributes: {},
        children: ['This is a sentence']
      }
    ]
  });
});
