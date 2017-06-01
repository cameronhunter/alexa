const presets = [
  // Latest stable ECMAScript features available on AWS Lambda
  [
    require.resolve('babel-preset-env'),
    {
      targets: {
        node: '6.10'
      }
    }
  ],

  // Flow
  require.resolve('babel-preset-flow')
];

const plugins = [
  // class { handleClick = () => { } }
  require.resolve('babel-plugin-transform-class-properties'),

  // { ...todo, completed: true }
  [
    require.resolve('babel-plugin-transform-object-rest-spread'),
    {
      useBuiltIns: true
    },
  ],

  // Transforms SSML
  [
    require.resolve('babel-plugin-transform-jsx'),
    {
      'module': 'ssml-jsx',
      'function': 'ssml',
      'useVariables': true
    }
  ],

  // Polyfills the runtime needed for async/await and generators
  [
    require.resolve('babel-plugin-transform-runtime'),
    {
      helpers: false,
      polyfill: false,
      regenerator: true
    },
  ],

  // function* () { yield 42; yield 43; }
  [
    require.resolve('babel-plugin-transform-regenerator'),
    {
      // Async functions are converted to generators by babel-preset-env
      async: false
    },
  ],

  // Adds syntax support for import()
  require.resolve('babel-plugin-syntax-dynamic-import'),

  // Add support for decorators
  require.resolve('babel-plugin-transform-decorators-legacy'),

  // Convert exports to commonjs
  require.resolve('babel-plugin-add-module-exports')
];

// This is similar to how `env` works in Babel:
// https://babeljs.io/docs/usage/babelrc/#env-option
// We are not using `env` because it’s ignored in versions > babel-core@6.10.4:
// https://github.com/babel/babel/issues/4539
// https://github.com/facebookincubator/create-react-app/issues/720
// It’s also nice that we can enforce `NODE_ENV` being specified.
var env = process.env.BABEL_ENV || process.env.NODE_ENV;
if (env !== 'development' && env !== 'test' && env !== 'production') {
  throw new Error(
    'Using `babel-preset-alexa-app` requires that you specify `NODE_ENV` or ' +
      '`BABEL_ENV` environment variables. Valid values are "development", ' +
      '"test", and "production". Instead, received: ' +
      JSON.stringify(env) +
      '.'
  );
}

module.exports = {
  presets,
  plugins
};
