/**
 * This is the root element of an SSML document.
 * More info: https://www.w3.org/TR/speech-synthesis/#S3.1.1
 */

import PropTypes from '../prop-types/index';

export default {
  type: 'speak',
  propTypes: {
    children: PropTypes.array.isRequired
  }
};
