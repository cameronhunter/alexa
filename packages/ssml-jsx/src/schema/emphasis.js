/**
 * Emphasize the tagged words or phrases. Emphasis changes rate and volume of the speech. More emphasis is spoken louder
 * and slower. Less emphasis is quieter and faster.
 *
 * More info:
 *   https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/speech-synthesis-markup-language-ssml-reference#emphasis
 */

import PropTypes from 'prop-types';

export default {
  type: 'emphasis',
  propTypes: {
    level: PropTypes.oneOf(['strong', 'moderate', 'reduced']),
    children: PropTypes.any.isRequired
  }
};
