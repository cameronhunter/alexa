'use strict';

const paths = require('./paths');
const fs = require('fs-extra');

// Make sure that including paths.js after env.js will read .env variables.
delete require.cache[require.resolve('./paths')];

const NODE_ENV = process.env.NODE_ENV;

if (!NODE_ENV) {
  throw new Error('The NODE_ENV environment variable is required but was not specified.');
}

// https://github.com/bkeepers/dotenv#what-other-env-files-can-i-use
var dotenvFiles = [
  `${paths.dotenv}.${NODE_ENV}.local`,
  `${paths.dotenv}.${NODE_ENV}`,
  // Don't include `.env.local` for `test` environment
  // since normally you expect tests to produce the same
  // results for everyone
  NODE_ENV !== 'test' && `${paths.dotenv}.local`,
  paths.dotenv,
].filter(Boolean);

// Load environment variables from .env* files. Suppress warnings using silent
// if this file is missing. dotenv will never modify any environment variables
// that have already been set.
// https://github.com/motdotla/dotenv
dotenvFiles.forEach(dotenvFile => {
  if (fs.existsSync(dotenvFile)) {
    require('dotenv').config({ path: dotenvFile });
  }
});

// Grab NODE_ENV and ALEXA_APP_* environment variables and prepare them to be
// injected into the application via DefinePlugin in Webpack configuration.
const ALEXA_APP = /^ALEXA_APP_/i;

module.exports = () => {
  const raw = Object.keys(process.env)
    .filter(key => ALEXA_APP.test(key))
    .reduce(
      (env, key) => Object.assign({}, env, { [key]: process.env[key] }),
      { NODE_ENV: process.env.NODE_ENV || 'development' }
    );

  // Stringify all values so we can feed into Webpack DefinePlugin
  const stringified = {
    'process.env': (
      Object.keys(raw).reduce(
        (env, key) => Object.assign({}, env, { [key]: JSON.stringify(raw[key]) }),
        {}
      )
    )
  };

  return { raw, stringified };
};
