export const match = (regex) => (props, propName, tagName) => {
  const value = props && props[propName];
  if (value && !regex.exec(value)) {
    return new Error(`Invalid value for prop "${propName}" on "${tagName}" tag. Expected "${value}" to match ${regex.toString()}.`);
  }
};

export const none = (props, propName, tagName) => {
  if (props && props[propName]) {
    return new Error(`Unexpected prop "${propName}" on "${tagName}" tag. Expected none.`);
  }
};
