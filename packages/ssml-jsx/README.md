# ssml-jsx [![NPM Version](https://img.shields.io/npm/v/ssml-jsx.svg)](https://npmjs.org/package/ssml-jsx)

Write [SSML](https://www.w3.org/TR/speech-synthesis/) inline within JavaScript. SSML is used in both
[Amazon Alexa](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/speech-synthesis-markup-language-ssml-reference)
and [Google Home](https://developers.google.com/actions/reference/ssml) devices to provide tight control over device
speech.

## Setup

You can use SSML directly in source code by including
`babel-plugin-transform-jsx` in your Babel configuration and importing `ssml` from `ssml-jsx`.

```bash
$ npm install --save-dev babel-plugin-transform-jsx
$ npm install --save ssml-jsx
```

`.babelrc`:
```json
{
  "plugins": [
    ["transform-jsx", { "function": "ssml", "useVariables": true }]
  ]
}
```

## Usage

```javascript
import ssml, { renderToString } from 'ssml-jsx';

// Author SSML directly as JSX
const speechSSML = (
  <speak>
    <p>Hello world!</p>
    <break time='2s' />
    <p>What would you like to do today?</p>
  </speak>
);

// Render SSML to a string
const speechString = renderToString(speechSSML);
```
