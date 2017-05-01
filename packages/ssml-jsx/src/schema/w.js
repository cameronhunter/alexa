/**
 * Similar to <say-as>, this tag customizes the pronunciation of words by specifying the word’s part of speech.
 *
 * More info:
 *   https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/speech-synthesis-markup-language-ssml-reference#w
 */

import PropTypes from 'prop-types';

export default {
  type: 'w',
  propTypes: {
    role: PropTypes.oneOf(['amazon:VB', 'amazon:VBD', 'amazon:NN', 'amazon:SENSE_1']),
    children: PropTypes.any.isRequired
  }
};
