/**
 * Pronounce the specified word or phrase as a different word or phrase. Specify the pronunciation to substitute with
 * the alias attribute.
 *
 * More info:
 *   https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/speech-synthesis-markup-language-ssml-reference#sub
 */

import PropTypes from 'prop-types';

export default {
  type: 'sub',
  propTypes: {
    alias: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired
  }
};
