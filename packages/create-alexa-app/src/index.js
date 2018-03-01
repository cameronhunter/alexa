const fs = require('fs-extra');
const path = require('path');
const run = require('./run');
const validateName = require('./validateName');

const chain = (...promises) => promises.reduce((state, action) => state.then(action), Promise.resolve());

const error = (name) => (err) => Promise.reject({ name, error: err });

const preinstall = (projectDirectory) => () => {
  const root = path.resolve(projectDirectory);
  const appName = path.basename(root);
  return validateName(appName)
    .then(() => ({ appName, root }))
    .catch(error('Pre-install'));
};

const install = (packageJson) => ({ appName, root }) => {
  const packagePath = path.join(root, 'package.json');
  return fs
    .ensureDir(root)
    .then(() => fs.writeJson(packagePath, Object.assign({ name: appName }, packageJson), { spaces: 2 }))
    .catch(error('Package creation'))
    .then(() => process.chdir(root))
    .then(() => run('npm', 'install'))
    .catch(error('Dependency installation'))
    .then(() => run('npm', 'run', 'init', '--', root))
    .catch(error('Project initialization'))
    .then(() => root);
};

const postinstall = (root) => {
  const packageJson = require(path.join(root, 'package.json'));
  const scripts = Object.assign({}, packageJson.scripts, { init: undefined });
  const newPackageJson = Object.assign({}, packageJson, { scripts });
  return fs.writeJson(path.join(root, 'package.json'), newPackageJson, { spaces: 2 }).catch(error('Post-install'));
};

module.exports = (projectDirectory, configuration) =>
  chain(preinstall(projectDirectory), install(configuration.package.json), postinstall).catch((error) => {
    // Delete known generated files
    return Promise.reject(error);
  });
