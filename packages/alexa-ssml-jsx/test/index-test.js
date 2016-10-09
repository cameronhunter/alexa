import test from 'ava';
import ssml from '../src/index';

test('creates an object containing a type key', t => {
  const speech = <speak>Hello world</speak>;
  t.deepEqual(speech, {
    type: 'speak',
    props: {
      children: ['Hello world']
    }
  });
});

test('creates an object containing type and props keys', t => {
  const speech = (<break strength='medium' />);
  t.deepEqual(speech, {
    type: 'break',
    props: {
      strength: 'medium'
    }
  });
});

test('creates an object containing type and children keys', t => {
  const speech = (
        <speak>
            <s>This is a sentence</s>
        </speak>
    );

  t.deepEqual(speech, {
    type: 'speak',
    props: {
      children: [
        {
          type: 's',
          props: {
            children: ['This is a sentence']
          }
        }
      ]
    }
  });
});
