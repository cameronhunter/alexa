/**
 * Provides a phonemic/phonetic pronunciation for the contained text. For example, people may pronounce words like
 * “pecan” differently.
 *
 * More info:
 *   https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/speech-synthesis-markup-language-ssml-reference#phoneme
 */

import PropTypes from 'prop-types';

export default {
  type: 'phoneme',
  propTypes: {
    alphabet: PropTypes.oneOf(['ipa', 'x-sampa']).isRequired,
    ph: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired
  }
};
