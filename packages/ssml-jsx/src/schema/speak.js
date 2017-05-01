/**
 * This is the root element of an SSML document.
 *
 * More info:
 *   https://www.w3.org/TR/speech-synthesis/#S3.1.1
 */

import PropTypes from 'prop-types';

export default {
  type: 'speak',
  propTypes: {
    children: PropTypes.any.isRequired
  }
};
