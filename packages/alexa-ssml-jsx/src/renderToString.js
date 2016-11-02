const entries = (object) => Object.keys(object).map(key => [key, object[key]]);

export default function renderToString(node, options = {}) {
  if (!node || node.type !== 'speak') {
    throw Error('Expected SSML to be surrounded in a <speak> tag.');
  }

  return render(node, { ...options, root: true });
}

function render(node, options = {}) {
  if (!node) {
    return '';
  }

  if (Array.isArray(node)) {
    return node.map(child => render(child, { ...options, root: false })).join('');
  }

  if (typeof node.type === 'function') {
    return render(node.type(node.props), { ...options, root: false });
  }

  if (typeof node === 'string') {
    return node;
  }

  const { children = [], ...rest } = node.props || {};

  if (node.type === 'speak' && !options.root) {
    return children.map(child => render(child, { ...options, root: false })).join('');
  }

  const props = entries(rest).reduce((state, [key, value]) => `${state} ${key}="${value}"`, '');

  return children.length ? `<${node.type}${props}>${children.map(child => render(child, { ...options, root: false })).join('')}</${node.type}>` : `<${node.type}${props}/>`;
}
