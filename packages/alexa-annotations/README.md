# alexa-annotations

Easily create Alexa Skills to run on AWS Lambda using ES6 classes and ES7 decorators.

Try it in the [online playground](http://cameronhunter.github.io/alexa-playground/) or create your own Alexa skill with the [Yeoman generator](https://github.com/cameronhunter/generator-alexa-skill).

## Custom Skill Example

```javascript
import { Skill, Intent, Launch } from 'alexa-annotations';
import { ask, say, card } from 'alexa-response';
import fetch from 'isomorphic-fetch';

@Skill
export default class Echo {

  @Launch
  launch(event) {
    return ask('Welcome to the example Echo skill! What would you like me to repeat?');
  }

  @Intent('echo')
  echo({ sentence }, { request }) {
    return say(sentence).card({ title: 'Echo', content: sentence });
  }

  @Intent('AMAZON.HelpIntent')
  help() {
    return ask('I repeat whatever you say to me! What would you like me to repeat?');
  }

  @Intent('AMAZON.CancelIntent', 'AMAZON.StopIntent')
  stop() {
    return say('Goodbye');
  }

  @Intent('Credits')
  credits() {
    const url = 'https://raw.githubusercontent.com/cameronhunter/alexa-annotations/master/package.json';
    return fetch(url).then(response => response.json()).then(({ name, author }) => {
      return say(`${name} was created by ${author.name}`).card({ title: name, content: `Credits: ${author.name} <${author.email}> (${author.url})`});
    });
  }

}
```

## Smart Home Skill Example

```javascript
import { Skill, Discovery, TurnOn, TurnOff } from 'alexa-annotations';
import { devices, brightness } from './light-bulbs';

@Skill
export default class SmartHome {

  @Discovery
  discovery() {
    return devices();
  }

  @TurnOn
  on(applianceId) {
    return brightness(applianceId, 100);
  }

  @TurnOff
  off(applianceId) {
    return brightness(applianceId, 0);
  }
}
```

## Custom Annotations

You can also create your own custom annotations:

```javascript
import { annotation } from 'alexa-annotations';

const PlaybackStarted = annotation(
    // Predicate to match the event
    ({ request = {} }) => request.type === 'AudioPlayer.PlaybackStarted',

    // Optionally transform the event to pass additional params to the handler
    ({ request = {} }) => request.token ? [JSON.parse(request.token)] : []
);

const AudioPlayerEvent = annotation(
    ({ request = {} }) => request.type && request.type.startsWith('AudioPlayer.'),
    ({ request = {} }) => request.type
);

@Skill
class AudioSkill {

    @PlaybackStarted
    onPlaybackStarted(token, event) {
        // Do something with token and event
    }

    @AudioPlayerEvent
    onAudioPlayerEvent(type, event) {
      switch (type) {
        case 'AudioPlayer.PlaybackStopped':
          // Handle stopped event
        case 'AudioPlayer.PlaybackPaused':
          // Handle pause event
        default:
          // Handle other audio player event types
      }
    }

}
```
