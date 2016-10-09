import schema from './schema/index';
import validate from './prop-types/validate';

export default function ssml(tagName, props, ...children) {
  const tag = throwIfUndefined(schema[tagName], `Unsupported tag: "${tagName}"`);

  const hasProps = props || tag.defaultProps || children.length;
  const mergedProps = hasProps && { ...tag.defaultProps, ...props, ...(children.length && { children }) };
  const validatedProps = validate(tag, mergedProps);

  return { type: tag.type, ...(validatedProps && { props: validatedProps }) };
};

function throwIfUndefined(item, error) {
  if (!item) {
    throw new Error(error);
  } else {
    return item;
  }
}
