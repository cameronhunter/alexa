import { Skill, Launch, Intent } from 'alexa-annotations';
import { say, ask } from 'alexa-response';

export class App {

  @Launch
  launch() {
    return say('Alexa app launched!');
  }

  @Intent('hello')
  hello({ name = 'world' }) {
    return say(`Hello ${name}`).card({ title: 'Alexa App', content: `Hello ${name}` });
  }

  @Intent('AMAZON.HelpIntent')
  help() {
    return ask('I say hello to people. Who should I say hello to?').reprompt('Who should I say hello to?');
  }

  @Intent('AMAZON.CancelIntent', 'AMAZON.StopIntent')
  stop() {
    return say(<speak>Goodbye!</speak>);
  }

}

export default Skill(App);
