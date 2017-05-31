const path = require('path');
const fs = require('fs-extra');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const eslintFormatter = require('react-dev-utils/eslintFormatter');
const webpack = require('webpack');
const babelConfig = require('./babel.config');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const packageJson = require(resolveApp('package.json'));
const buildDirectory = resolveApp('build');

module.exports = {
  // Don't attempt to continue if there are any errors.
  bail: true,
  // We generate sourcemaps in production. This is slow but gives good results.
  // You can exclude the *.map files from the build during deployment.
  devtool: 'source-map',
  // In production, we only want to load the polyfills and the app code.
  entry: [
    require.resolve('babel-polyfill'),
    packageJson.main
  ],

  target: 'node',

  // The build folder
  output: {
    path: buildDirectory,
    filename: 'index.js',
    libraryTarget: 'commonjs'
  },

  resolve: {
    // This allows you to set a fallback for where Webpack should look for modules.
    // We placed these paths second because we want `node_modules` to "win"
    // if there are any conflicts. This matches Node resolution mechanism.
    // https://github.com/facebookincubator/create-react-app/issues/253
    modules: ['node_modules', resolveApp('node_modules')].concat(
      // FIXME: NOT TRUE
      // It is guaranteed to exist because we tweak it in `env.js`
      (process.env.NODE_PATH || '').split(path.delimiter).filter(Boolean)
    ),
    // These are the reasonable defaults supported by the Node ecosystem.
    extensions: ['.js', '.json'],
    plugins: [
      // Prevents users from importing files from outside of src/ (or node_modules/).
      // This often causes confusion because we only process files within src/ with babel.
      // To fix this, we prevent you from importing files out of src/ -- if you'd like to,
      // please link the files into your node_modules/ and let module-resolution kick in.
      // Make sure your source files are compiled, as they will not be processed in any way.
      new ModuleScopePlugin(resolveApp('src')),
    ]
  },
  module: {
    strictExportPresence: true,
    rules: [
      // Disable require.ensure as it's not a standard language feature.
      { parser: { requireEnsure: false } },

      // Run the linter
      {
        test: /\.js$/,
        enforce: 'pre',
        use: [{
          options: {
            formatter: eslintFormatter,
            baseConfig: {
              extends: [require.resolve('eslint-config-alexa-app')]
            },
            ignore: false,
            useEslintrc: false
          },
          loader: require.resolve('eslint-loader')
        }],
        include: resolveApp('src')
      },

      // Process JS with Babel.
      {
        test: /\.js$/,
        include: resolveApp('src'),
        loader: require.resolve('babel-loader'),
        options: babelConfig,
      }
    ]
  },
  plugins: [
    // Makes some environment variables available to the JS code, for example:
    // if (process.env.NODE_ENV === 'production') { ... }. See `./env.js`.
    // It is absolutely essential that NODE_ENV was set to production here.
    // Otherwise React will be compiled in the very slow development mode.
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
};
