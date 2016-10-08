import { Skill, Intent, Launch } from '../..';
import Response from 'alexa-response';

const SPACE_FACTS = [
  'A year on Mercury is just 88 days long.',
  'Despite being farther from the Sun, Venus experiences higher temperatures than Mercury.',
  'Venus rotates counter-clockwise, possibly because of a collision in the past with an asteroid.',
  'On Mars, the Sun appears about half the size as it does on Earth.',
  'Earth is the only planet not named after a god.',
  'Jupiter has the shortest day of all the planets.',
  'The Milky Way galaxy will collide with the Andromeda Galaxy in about 5 billion years.',
  'The Sun contains 99.86% of the mass in the Solar System.',
  'The Sun is an almost perfect sphere.',
  'A total solar eclipse can happen once every 1 to 2 years. This makes them a rare event.',
  'Saturn radiates two and a half times more energy into space than it receives from the sun.',
  'The temperature inside the Sun can reach 15 million degrees Celsius.',
  'The Moon is moving approximately 3.8 cm away from our planet every year.'
];

@Skill
export default class SpaceGeek {

  @Launch
  @Intent('GetNewFactIntent')
  fact() {
    const index = Math.floor(Math.random() * SPACE_FACTS.length);
    const speech = `Here's your space fact: ${SPACE_FACTS[index]}`;
    return Response.say(speech).card({ title: 'SpaceGeek', content: speech });
  }

  @Intent('AMAZON.HelpIntent')
  help() {
    return Response.ask('You can ask Space Geek tell me a space fact, or, you can say exit... What can I help you with?').reprompt('What can I help you with?');
  }

  @Intent('AMAZON.CancelIntent', 'AMAZON.StopIntent')
  stop() {
    return Response.say('Goodbye');
  }

}
