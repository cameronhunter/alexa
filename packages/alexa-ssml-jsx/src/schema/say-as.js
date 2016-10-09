/**
 * Indicate information on the type of text construct contained within the element.
 * More info: https://www.w3.org/TR/speech-synthesis/#S3.1.8
 */

import PropTypes from '../prop-types/index';

const interpretations = [
  'characters', 'spell-out',  // Spell out each letter
  'cardinal', 'number',       // Interpret the value as a cardinal number
  'ordinal',                  // Interpret the value as an ordinal number
  'digits',                   // Spell each digit separately
  'fraction',                 // Interpret the value as a fraction
  'unit',                     // Interpret a value as a measurement
  'date',                     // Interpret the value as a date. Specify the format with the format attribute
  'time',                     // Interpret a value such as 1'21" as duration in minutes and seconds
  'telephone',                // Interpret a value as a 7-digit or 10-digit telephone number
  'address'                   // Interpret a value as part of street address
];

const formats = ['mdy', 'dmy', 'ymd', 'md', 'dm', 'ym', 'my', 'd', 'm', 'y'];

export default {
  type: 'say-as',
  propTypes: {
    children: PropTypes.array.isRequired,
    'interpret-as': PropTypes.oneOf(interpretations).isRequired,
    format: (props, propName, tagName) => {
      if (props['interpret-as'] === 'date') {
        const format = PropTypes.oneOf(formats).isRequired;
        return format(props, propName, tagName);
      }
    }
  }
};
