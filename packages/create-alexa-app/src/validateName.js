const validateProjectName = require('validate-npm-package-name');

module.exports = function validateAppName(appName) {
  return new Promise((resolve, reject) => {
    const {
      validForNewPackages,
      errors = [],
      warnings = []
    } = validateProjectName(appName);

    if (validForNewPackages) {
      resolve(appName);
    } else {
      const error = [
        `Could not create a project called "${appName}" because of npm naming restrictions:`,
        ...errors.concat(warnings).map((message) => `  * ${message}`)
      ];

      reject(error.join('\n'));
    }
  });
};
