import { Skill, Launch, Intent } from 'alexa-annotations';
import Response, { say, ask } from 'alexa-response';

export class HelloWorld {
  @Launch
  launch() {
    return Response.build({
      ask: 'Hello World Alexa skill launched! Who would you like to say hello to?',
      reprompt: 'Who would you like to say hello to?'
    });
  }

  @Intent('hello')
  hello({ name = 'world' }) {
    return Response.build({
      say: <speak>Hello {name}!</speak>,
      card: {
        title: 'Hello to…',
        content: `Hello ${name}!`
      }
    });
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

export default Skill(HelloWorld);
