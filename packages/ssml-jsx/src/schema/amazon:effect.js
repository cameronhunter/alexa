/**
 * Applies Amazon-specific effects to the speech.
 *
 * More info:
 *   https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/speech-synthesis-markup-language-ssml-reference#amazon-effect
 */

import PropTypes from 'prop-types';

export default {
  type: 'amazon:effect',
  propTypes: {
    name: PropTypes.oneOf(['whispered']),
    children: PropTypes.any.isRequired
  }
};
