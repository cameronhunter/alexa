const path = require('path');
const fs = require('fs-extra');

const appRootDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appRootDirectory, relativePath);
const appPackage = resolveApp('package.json');
const appPackageJson = require(appPackage);

module.exports = {
  appBuildDirectory: resolveApp('build'),
  appMain: appPackageJson.main,
  appModules: resolveApp('node_modules'),
  appPackage,
  appRootDirectory,
  appSrc: resolveApp('src')
};
