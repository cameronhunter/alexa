# alexa-annotations

[![Build Status](https://travis-ci.org/cameronhunter/alexa-annotations.svg?branch=master)](https://travis-ci.org/cameronhunter/alexa-annotations) [![NPM Version](https://img.shields.io/npm/v/alexa-annotations.svg)](https://npmjs.org/package/alexa-annotations) [![License](https://img.shields.io/npm/l/alexa-annotations.svg)](https://github.com/cameronhunter/alexa-annotations/blob/master/LICENSE)

Easily create Alexa Skills to run on AWS Lambda using ES6 classes and ES7 decorators.

Try it in the [online playground](http://cameronhunter.github.io/alexa-playground/) or create your own Alexa skill with the [Yeoman generator](https://github.com/cameronhunter/generator-alexa-skill).

## Example

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
