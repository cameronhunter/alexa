module.exports = {
  babelrc: false,
  presets: [
    ['env', { targets: { node: '6.10' } }]
  ],
  plugins: [
    'add-module-exports',
    'transform-decorators-legacy',
    ['transform-jsx', { 'module': 'ssml-jsx', 'function': 'ssml', 'useVariables': true }]
  ]
};
