/**
 * Represents a pause in the speech. Set the length of the pause with the strength or time attributes.
 * More info: https://www.w3.org/TR/speech-synthesis/#S3.2.3
 */

import PropTypes from '../prop-types/index';

const Strengths = [
  'none',     // No pause should be outputted. This can be used to remove a pause that would normally occur (such as after a period).
  'x-weak',   // No pause should be outputted (same as none).
  'weak',     // Treat adjacent words as if separated by a single comma (equivalent to medium).
  'medium',   // Treat adjacent words as if separated by a single comma.
  'strong',   // Make a sentence break (equivalent to using the <s> tag).
  'x-strong'  // Make a paragraph break (equivalent to using the <p> tag).
];

export default {
  type: 'break',
  propTypes: {
    strength: PropTypes.oneOf(Strengths),
    time: PropTypes.match(/(\d+)(m?s)?/),
    children: PropTypes.none
  }
};
