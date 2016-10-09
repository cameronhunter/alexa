# Alexa

A monorepo of libraries used to build both custom skills and smart home skills
for the Amazon Echo.

## Libraries

### alexa-annotations
Provides ES7 annotations for declaratively building both custom skills and smart
home skills for the Echo. These skills are designed to be run on AWS Lambda.

### alexa-request
Provides a chainable pattern for building requests that skills would receive via
AWS Lambda. This library is mostly used to build test requests for end-to-end
testing of skills.

### alexa-response
Provides a chainable pattern for building responses for skill intents and smart
home directives. Easily create speech, cards, and question responses as well as
smart home responses.

### alexa-ssml-jsx
Alexa supports speech via simple strings, but it also supports more complex
speech defined in SSML. This library allows developers to write valid SSML
inline with their JavaScript.
