const path = require('path');
const fs = require('fs-extra');

const appRootDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appRootDirectory, relativePath);
const appPackageJson = resolveApp('package.json');
const { main: appMain } = require(appPackageJson);
const appBuildDirectory = resolveApp('build');

module.exports = {
  appBuildDirectory,
  appMain: resolveApp(appMain),
  appModules: resolveApp('node_modules'),
  appPackageJson,
  appBuildBundle: resolveApp('./build/index.js'),
  appBuildPackage: resolveApp('./build/package.zip'),
  appRootDirectory,
  appSrc: resolveApp('src'),
  dotenv: resolveApp('.env')
};
