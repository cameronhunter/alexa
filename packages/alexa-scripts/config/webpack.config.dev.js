'use strict';

const path = require('path');
const webpack = require('webpack');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
const eslintFormatter = require('react-dev-utils/eslintFormatter');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const fs = require('fs-extra');
const babelConfig = require('./babel.config');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const packageJson = require(resolveApp('package.json'));
const buildDirectory = resolveApp('build');

// This is the development configuration.
// It is focused on developer experience and fast rebuilds.
// The production configuration is different and lives in a separate file.
module.exports = {
  // You may want 'eval' instead if you prefer to see the compiled output in DevTools.
  // See the discussion in https://github.com/facebookincubator/create-react-app/issues/343.
  devtool: 'cheap-module-source-map',
  // These are the "entry points" to our application.
  // This means they will be the "root" imports that are included in JS bundle.
  // The first two entry points enable "hot" CSS and auto-refreshes for JS.
  entry: [
    // We ship a few polyfills by default:
    require.resolve('babel-polyfill'),
    // Finally, this is your app's code:
    packageJson.main
  ],
  output: {
    // Next line is not used in dev but WebpackDevServer crashes without it:
    path: buildDirectory,
    // Add /* filename */ comments to generated require()s in the output.
    pathinfo: true,
    // This does not produce a real file. It's just the virtual path that is
    // served by WebpackDevServer in development. This is the JS bundle
    // containing code from all our entry points, and the Webpack runtime.
    filename: 'index.js',
    // This is the URL that app is served from. We use "/" in development.
    publicPath: '/',
    // Point sourcemap entries to original disk location
    devtoolModuleFilenameTemplate(info) {
      return path.resolve(info.absoluteResourcePath);
    }
  },
  resolve: {
    // This allows you to set a fallback for where Webpack should look for modules.
    // We placed these paths second because we want `node_modules` to "win"
    // if there are any conflicts. This matches Node resolution mechanism.
    // https://github.com/facebookincubator/create-react-app/issues/253
    modules: ['node_modules', resolveApp('node_modules')].concat(
      // FIXME: Maybe not true
      // It is guaranteed to exist because we tweak it in `env.js`
      (process.env.NODE_PATH || '').split(path.delimiter).filter(Boolean)
    ),
    // These are the reasonable defaults supported by the Node ecosystem.
    extensions: ['.js', '.json'],
    alias: {
      // Resolve Babel runtime relative to react-scripts.
      // It usually still works on npm 3 without this but it would be
      // unfortunate to rely on, as react-scripts could be symlinked,
      // and thus babel-runtime might not be resolvable from the source.
      'babel-runtime': path.dirname(
        require.resolve('babel-runtime/package.json')
      )
    },
    plugins: [
      // Prevents users from importing files from outside of src/ (or node_modules/).
      // This often causes confusion because we only process files within src/ with babel.
      // To fix this, we prevent you from importing files out of src/ -- if you'd like to,
      // please link the files into your node_modules/ and let module-resolution kick in.
      // Make sure your source files are compiled, as they will not be processed in any way.
      new ModuleScopePlugin(resolveApp('src')),
    ],
  },
  module: {
    strictExportPresence: true,
    rules: [
      // Disable require.ensure as it's not a standard language feature.
      { parser: { requireEnsure: false } },

      // Run the Linter
      {
        test: /\.js$/,
        enforce: 'pre',
        use: [
          {
            options: {
              formatter: eslintFormatter,
              baseConfig: {
                extends: [require.resolve('eslint-config-alexa-app')]
              },
              ignore: false,
              useEslintrc: false
            },
            loader: require.resolve('eslint-loader'),
          },
        ],
        include: resolveApp('src'),
      },

      // Process JS with Babel.
      {
        test: /\.(js|jsx)$/,
        include: resolveApp('src'),
        loader: require.resolve('babel-loader'),
        options: Object.assign({}, babelConfig, {
          // This is a feature of `babel-loader` for webpack (not Babel itself).
          // It enables caching results in ./node_modules/.cache/babel-loader/
          // directory for faster rebuilds.
          cacheDirectory: true
        })
      }
    ]
  },
  plugins: [
    // Makes some environment variables available to the JS code, for example:
    // if (process.env.NODE_ENV === 'development') { ... }. See `./env.js`.
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    }),
    // Watcher doesn't work well if you mistype casing in a path so we use
    // a plugin that prints an error when you attempt to do this.
    // See https://github.com/facebookincubator/create-react-app/issues/240
    new CaseSensitivePathsPlugin(),
    // If you require a missing module and then `npm install` it, you still have
    // to restart the development server for Webpack to discover it. This plugin
    // makes the discovery automatic so you don't have to restart.
    // See https://github.com/facebookincubator/create-react-app/issues/186
    new WatchMissingNodeModulesPlugin(resolveApp('node_modules')),
    // Moment.js is an extremely popular library that bundles large locale files
    // by default due to how Webpack interprets its code. This is a practical
    // solution that requires the user to opt into importing specific locales.
    // https://github.com/jmblog/how-to-optimize-momentjs-with-webpack
    // You can remove this if you don't use Moment.js:
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ],
  // Turn off performance hints during development because we don't do any
  // splitting or minification in interest of speed. These warnings become
  // cumbersome.
  performance: {
    hints: false
  }
};
