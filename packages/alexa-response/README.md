# Alexa Response

[![Build Status](https://travis-ci.org/cameronhunter/alexa-response.svg?branch=master)](https://travis-ci.org/cameronhunter/alexa-response) [![NPM Version](https://img.shields.io/npm/v/alexa-response.svg)](https://npmjs.org/package/alexa-response) [![License](https://img.shields.io/npm/l/alexa-response.svg)](https://github.com/cameronhunter/alexa-response/blob/master/LICENSE.md)

Build JSON responses for Amazon Alexa, easily. Alexa Response makes use of a
chainable interface to simplify building complex responses. Try it out in the
[Alexa Playground](http://cameronhunter.github.io/alexa-playground/).

## API

### ask(speech: String, type: Optional\<PlainText|SSML\>)

Alexa can ask questions to users and will wait for their responses. The
parameters passed to this function can be plain text or [SSML](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/speech-synthesis-markup-language-ssml-reference).

```javascript
Response.ask('What would like me to ask?').build();
```

### say(speech: String, type: Optional\<PlainText|SSML\>)

This is similar to `ask` except that it closes the current session. The
parameters passed to this function can be plain text or [SSML](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/speech-synthesis-markup-language-ssml-reference).

```javascript
Response.say('I can say whatever you want me to!').build();
```

### reprompt(speech: String, type: Optional\<PlainText|SSML\>)

If Alexa doesn't pick up the answer to a question then the reprompt text will be
used. The parameters passed to this function can be plain text or [SSML](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/speech-synthesis-markup-language-ssml-reference).

```javascript
Response.ask('What would you like me to ask?')
        .reprompt('I can ask questions, what would you like me to ask?')
        .build();
```

### card(options: Object)

Cards show up in the Alexa app. Simple cards have titles and content, you can
pass an optional `type` for different card types.

```javascript
Response.say("I've put the answer to your question on your phone")
        .card({ title: 'Question and Answer', content: "Here's the answer to your question" })
        .build();
```

### attributes(data: Object)

You can maintain data across sessions using attribute data.

```javascript
Reponse.ask("What's your favorite color?")
       .attributes({ question_asked: true })
       .build();
```

### build(attributes: Optional\<Object\>)

Responses have a chainable API, when you want to finalize the response, call
`build`.

```javascript
Response.say("I've put the answer to your question on your phone")
        .card({ title: 'Question and Answer', content: "Here's the answer to your question" })
        .build();
```

## Inline SSML

You can use [SSML](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/speech-synthesis-markup-language-ssml-reference)
directly by including `babel-plugin-transform-react-jsx` in your `.babelrc` and
importing `ssml` from [`alexa-ssml`](https://github.com/nickclaw/alexa-ssml) in your source file.

```json
{
  "plugins": [
    ["transform-react-jsx", { "pragma": "ssml" }]
  ]
}
```

```javascript
import Response from 'alexa-response';
import { ssml } from 'alexa-ssml';

Response.ask(<speak><p>Hello world!</p><p>What would you like to do today?</p></speak>).build();
```
