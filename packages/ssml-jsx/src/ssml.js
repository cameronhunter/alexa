import schema from './schema/index';
import PropTypes from 'prop-types';

export default function ssml({ elementName: tagName, attributes: props, children }) {
  const tag = throwIfUndefined(getTagDefinition(tagName), `Unsupported tag: "${tagName}"`);
  const mergedProps = tag.defaultProps ? { ...tag.defaultProps, ...props } : props;

  PropTypes.checkPropTypes(tag.propTypes, { ...mergedProps, children }, 'prop', tagName);

  return { elementName: tag.type, attributes: mergedProps, children };
};

function throwIfUndefined(item, error) {
  if (!item) {
    throw new Error(error);
  } else {
    return item;
  }
}

function getTagDefinition(tag) {
  switch (typeof tag) {
  case 'string':
    return schema[tag];
  case 'function':
    return { ...tag, type: tag };
  default:
    return undefined;
  }
}
