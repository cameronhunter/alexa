function chainable(validator) {
  const chainableValidator = (props, propName, tagName) => validator(props, propName, tagName);

  chainableValidator.isRequired = (props, propName, tagName) => {
    if (!props || !props[propName]) {
      throw new Error(`Missing required prop "${propName}" on "${tagName}" tag.`);
    } else {
      return validator(props, propName, tagName);
    }
  };

  return chainableValidator;
}

const oneOf = (possibilities = []) => (props, propName, tagName) => {
  const value = props && props[propName];
  if (value && possibilities.indexOf(value) < 0) {
    throw new Error(`Unsupported value "${value}" for prop "${propName}" on "${tagName}" tag. Supported values are: ${possibilities.join(', ')}.`);
  }
};

const match = (regex) => (props, propName, tagName) => {
  const value = props && props[propName];
  if (value && !regex.exec(value)) {
    throw new Error(`Invalid value for prop "${propName}" on "${tagName}" tag. Expected "${value}" to match ${regex.toString()}.`);
  }
};

const array = (props, propName, tagName) => {
  const value = props && props[propName];
  if (!Array.isArray(value)) {
    throw new Error(`Invalid value for prop "${propName}" on "${tagName}" tag. Expected an array.`);
  }
};

const none = (props, propName, tagName) => {
  if (props && props[propName]) {
    throw new Error(`Unexpected prop "${propName}" on "${tagName}" tag. Expected none.`);
  }
};

export default {
  array: chainable(array),
  match: (regex) => chainable(match(regex)),
  none: chainable(none),
  oneOf: (possibilities) => chainable(oneOf(possibilities))
};
