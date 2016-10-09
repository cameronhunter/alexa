/**
 * Represents a sentence. This tag provides strong breaks before and after the tag.
 * More info: https://www.w3.org/TR/speech-synthesis/#S3.1.7
 */

import PropTypes from '../prop-types/index';

export default {
  type: 's',
  propTypes: {
    children: PropTypes.array.isRequired
  }
};
