# Alexa Response

Build JSON responses for Amazon Alexa, easily. Alexa Response makes use of a
chainable interface to simplify building complex responses.

## API

### ask(speech: String, type: Optional<PlainText|SSML>)

Alexa can ask questions to users and will wait for their responses. The
parameters passed to this function can be plain text or [SSML](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/speech-synthesis-markup-language-ssml-reference).

```javascript
Response.ask('What would like me to ask?').build();
```

```javascript
Response.ask('<p>I can also ask questions in SSML! How do you like that?</p>', 'SSML').build();
```

### say(speech: String, type: Optional<PlainText|SSML>)

This is similar to `ask` except that it closes the current session. The
parameters passed to this function can be plain text or [SSML](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/speech-synthesis-markup-language-ssml-reference).

```javascript
Response.say('I can say whatever you want me to!').build();
```

```javascript
Response.say('<p>I can also speak SSML!</p>', 'SSML').build();
```

### reprompt(speech: String, type: Optional<PlainText|SSML>)

If Alexa doesn't pick up the answer to a question then the reprompt text will be
used. The parameters passed to this function can be plain text or [SSML](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/speech-synthesis-markup-language-ssml-reference).

```javascript
Response.ask('What would you like me to ask?')
        .reprompt('I can ask questions, what would you like me to ask?')
        .build();
```

### card(title: String, content: String)

Cards show up in the Alexa app. Simple cards have titles and content, you can
pass an optional third parameter for different card types.

```javascript
Response.say("I've put the answer to your question on your phone")
        .card('Question and Answer', "Here's the answer to your question")
        .build();
```

### attributes(data: Object)

You can maintain data across sessions using attribute data.

```javascript
Reponse.ask("What's your favorite color?")
       .attributes({ question_asked: true })
       .build();
```

### build(attributes: Optional<Object>)

Responses have a chainable API, when you want to finalize the response, call
`build`.

```javascript
Response.say("I've put the answer to your question on your phone")
        .card('Question and Answer', "Here's the answer to your question")
        .build();
```
