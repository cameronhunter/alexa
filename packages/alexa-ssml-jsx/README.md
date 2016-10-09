# alexa-ssml-jsx

Write SSML inline within JavaScript.

You can use [SSML](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/speech-synthesis-markup-language-ssml-reference)
directly by including `babel-plugin-transform-react-jsx` in your `.babelrc` and
importing `ssml` from `alexa-ssml-jsx`.

```json
{
  "plugins": [
    ["transform-react-jsx", { "pragma": "ssml" }]
  ]
}
```

```javascript
import ssml, { renderToString } from 'alexa-ssml-jsx';

const speech = (
  <speak>
    <p>Hello world!</p>
    <break time='2s' />
    <p>What would you like to do today?</p>
  </speak>
);
```
