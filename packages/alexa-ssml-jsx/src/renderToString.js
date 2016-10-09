const entries = (object) => Object.keys(object).map(key => [key, object[key]]);

export default function renderToString(node, options = {}) {
  if (typeof node === 'string') {
    return node;
  }

  const { children = [], ...rest } = node.props || {};
  const props = entries(rest).reduce((state, [key, value]) => `${state} ${key}="${value}"`, '');

  return children.length ? `<${node.type}${props}>${children.map(child => renderToString(child, options)).join('')}</${node.type}>` : `<${node.type}${props}/>`;
}
