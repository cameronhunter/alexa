/**
 * The audio tag lets you provide the URL for an MP3 file that the Alexa service can play while rendering a response.
 * You can use this to embed short, pre-recorded audio within your service’s response.
 *
 * More info:
 *   https://www.w3.org/TR/speech-synthesis/#S3.3.1
 */

import PropTypes from 'prop-types';

export default {
  type: 'audio',
  propTypes: {
    src: PropTypes.string.isRequired,
    children: PropTypes.any
  }
};
