export default ({ name, propTypes = {} }, props) => {
  Object.keys(propTypes).forEach((key) => {
    const validator = propTypes[key];
    validator && validator(props, key, name);
  });

  return props;
};
