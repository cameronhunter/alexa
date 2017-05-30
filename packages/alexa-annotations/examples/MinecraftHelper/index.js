import { Skill, Intent, Launch } from '../..';
import Response from 'alexa-response';
import recipes from './recipes';

const { ask, say } = Response;

@Skill
export default class MinecraftHelper {

  @Launch
  launch() {
    return ask('Welcome to the Minecraft Helper. You can ask a question like, what\'s the recipe for a chest? ... Now, what can I help you with.')
            .reprompt('For instructions on what you can say, please say help me.');
  }

  @Intent('RecipeIntent')
  recipe({ Item }) {
    return recipes(Item).then(recipe => (
      say(recipe).card({ title: `Recipe for ${Item}`, content: recipe })
    )).catch(() => (
      Item
        ? ask(`I'm sorry, I currently do not know the recipe for ${Item}. What else can I help with?`).reprompt('What else can I help with?')
        : ask('I\'m sorry, I currently do not know that recipe. What else can I help with?').reprompt('What else can I help with?')
    ));
  }

  @Intent('AMAZON.HelpIntent')
  help() {
    return ask('You can ask questions about minecraft such as, what\'s the recipe for a chest, or, you can say exit... Now, what can I help you with?')
            .reprompt('You can say things like, what\'s the recipe for a chest, or you can say exit... Now, what can I help you with?');
  }

  @Intent('AMAZON.CancelIntent', 'AMAZON.StopIntent')
  stop() {
    return say('Goodbye');
  }
}
