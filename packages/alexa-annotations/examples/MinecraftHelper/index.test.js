import Request from 'alexa-request';
import MinecraftHelper from './index';

test('LaunchRequest', () => {
  const event = Request.launchRequest().build();
  return expect(MinecraftHelper(event)).resolves.toMatchSnapshot();
});

test('RecipeIntent', () => {
  const event = Request.intent('RecipeIntent', { Item: 'Farmland' }).build();
  return expect(MinecraftHelper(event)).resolves.toMatchSnapshot();
});

test('Unknown recipe', () => {
  const event = Request.intent('RecipeIntent', { Item: 'Coffee' }).build();
  return expect(MinecraftHelper(event)).resolves.toMatchSnapshot();
});

test('No recipe', () => {
  const event = Request.intent('RecipeIntent').build();
  return expect(MinecraftHelper(event)).resolves.toMatchSnapshot();
});
