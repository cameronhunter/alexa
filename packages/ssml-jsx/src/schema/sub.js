/**
 * Pronounce the specified word or phrase as a different word or phrase. Specify the pronunciation to substitute with
 * the alias attribute.
 *
 * More info:
 *   https://www.w3.org/TR/speech-synthesis/#edef_sub
 */

import PropTypes from 'prop-types';

export default {
  type: 'sub',
  propTypes: {
    alias: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired
  }
};
