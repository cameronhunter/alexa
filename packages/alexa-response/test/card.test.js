import { card } from '../src';
import ssml from 'ssml-jsx';

test('Simple', () => {
  expect(
    card({ title: 'Title', content: 'This is the card content' }).build()
  ).toMatchSnapshot();
});

test('LinkAccount', () => {
  expect(card({ type: 'LinkAccount' }).build()).toMatchSnapshot();
});
