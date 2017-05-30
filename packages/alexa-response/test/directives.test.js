import { directives, AudioPlayer } from '../src';

test('Add single directive', () => {
  expect(directives(AudioPlayer.stop()).build()).toMatchSnapshot();
});

test('Add multiple directives', () => {
  const actual = directives(
    AudioPlayer.play({ url: 'http://stream-1.url' }),
    AudioPlayer.enqueue({ url: 'http://stream-2.url' })
  );

  expect(actual.build()).toMatchSnapshot();
});
