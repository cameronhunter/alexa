const entries = (object) => Object.keys(object).map(key => [key, object[key]]);

export default function renderToString(node, options = {}) {
  if (!node || node.elementName !== 'speak') {
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

  if (typeof node.elementName === 'function') {
    return render(node.elementName({ ...node.attributes, children: node.children }), { ...options, root: false });
  }

  if (typeof node === 'string') {
    return node;
  }

  const children = node.children || [];

  if (node.elementName === 'speak' && !options.root) {
    return children.map(child => render(child, { ...options, root: false })).join('');
  }

  const attributes = entries(node.attributes).reduce((state, [key, value]) => `${state} ${key}="${value}"`, '');

  return children.length ? `<${node.elementName}${attributes}>${children.map(child => render(child, { ...options, root: false })).join('')}</${node.elementName}>` : `<${node.elementName}${attributes}/>`;
}
