# Alexa

A monorepo of libraries used to build both custom skills and smart home skills
for the Amazon Echo.

## Libraries

### [alexa-annotations](https://github.com/cameronhunter/alexa/tree/master/packages/alexa-annotations)
[![NPM Version](https://img.shields.io/npm/v/alexa-annotations.svg)](https://npmjs.org/package/alexa-annotations)

Provides ES7 annotations for declaratively building both custom skills and smart
home skills for the Echo. These skills are designed to be run on AWS Lambda. Try
it out in the [Playground](https://cameronhunter.github.io/alexa-playground/).

### [alexa-constants](https://github.com/cameronhunter/alexa/tree/master/packages/alexa-constants)
[![NPM Version](https://img.shields.io/npm/v/alexa-constants.svg)](https://npmjs.org/package/alexa-constants)

Provides constants commonly used in Amazon Alexa requests and responses.

### [alexa-request](https://github.com/cameronhunter/alexa/tree/master/packages/alexa-request)
[![NPM Version](https://img.shields.io/npm/v/alexa-request.svg)](https://npmjs.org/package/alexa-request)

Provides a chainable pattern for building requests that skills would receive via
AWS Lambda. This library is mostly used to build test requests for end-to-end
testing of skills.

### [alexa-response](https://github.com/cameronhunter/alexa/tree/master/packages/alexa-response)
[![NPM Version](https://img.shields.io/npm/v/alexa-response.svg)](https://npmjs.org/package/alexa-response)

Provides a chainable pattern for building responses for skill intents and smart
home directives. Easily create speech, cards, and question responses as well as
smart home responses.

### [ssml-jsx](https://github.com/cameronhunter/alexa/tree/master/packages/ssml-jsx)
[![NPM Version](https://img.shields.io/npm/v/ssml-jsx.svg)](https://npmjs.org/package/ssml-jsx)

Alexa supports speech via simple strings, but it also supports more complex
speech defined in SSML. This library allows developers to write valid SSML
inline with their JavaScript.
