import schema from './schema/index';
import PropTypes from 'prop-types';

export default function ssml(tagName, props, ...children) {
  const tag = throwIfUndefined(getTagDefinition(tagName), `Unsupported tag: "${tagName}"`);

  const hasProps = props || tag.defaultProps || children.length;
  const mergedProps = hasProps && { ...tag.defaultProps, ...props, ...(children.length && { children }) };

  PropTypes.checkPropTypes(tag.propTypes, mergedProps, 'prop', tagName);

  return { type: tag.type, ...(mergedProps && { props: mergedProps }) };
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
