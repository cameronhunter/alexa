const latestVersion = require('latest-version');
const path = require('path');

const getVersion = (
  process.env.NODE_ENV === 'dev'
    ? Promise.resolve(`file://${path.join(__dirname, '..', 'alexa-scripts')}`)
    : latestVersion('alexa-scripts').then((version) => `^${version}`)
);

module.exports = getVersion.then((version) => ({
  package: {
    json: {
      version: '0.1.0',
      private: true,
      license: 'UNLICENSED',
      scripts: {
        init: 'alexa-scripts init'
      },
      devDependencies: {
        'alexa-scripts': version
      }
    }
  }
}));
