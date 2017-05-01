/**
 * Modifies the volume, pitch, and rate of the tagged speech.
 *
 * More info:
 *   https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/speech-synthesis-markup-language-ssml-reference#prosody
 */

import PropTypes from 'prop-types';
import { match } from '../custom-prop-types';

export default {
  type: 'prosody',
  propTypes: {
    rate: PropTypes.oneOfType([
      PropTypes.oneOf(['x-slow', 'slow', 'medium', 'fast', 'x-fast']),
      match(/[1-9][0-9]*%/)
    ]),
    pitch: PropTypes.oneOfType([
      PropTypes.oneOf(['x-low', 'low', 'medium', 'high', 'x-high']),
      match(/[+-][1-9][0-9]*%/)
    ]),
    volume: PropTypes.oneOfType([
      PropTypes.oneOf(['silent', 'x-soft', 'soft', 'medium', 'loud', 'x-loud']),
      match(/[+-][0-9]+(?:[.][0-9]+)?dB/)
    ]),
    children: PropTypes.any.isRequired
  }
};
