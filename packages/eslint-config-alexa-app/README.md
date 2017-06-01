# eslint-config-alexa-app

This package includes the shareable ESLint configuration used by [Create Alexa App](https://github.com/cameronhunter/alexa/tree/master/packages/create-alexa-app).<br>
Please refer to its documentation:

* [Getting Started](https://github.com/cameronhunter/alexa/tree/master/packages/create-alexa-app/README.md#getting-started) – How to create a new app.
* [User Guide](https://github.com/cameronhunter/alexa/blob/master/packages/alexa-scripts/template/README.md) – How to develop apps bootstrapped with Create Alexa App.

## Usage in Create Alexa App Projects

The easiest way to use this configuration is with [Create Alexa App](https://github.com/cameronhunter/alexa/tree/master/packages/create-alexa-app), which includes it by default.

**You don’t need to install it separately in Create Alexa App projects.**

## Usage Outside of Create Alexa App

If you want to use this ESLint configuration in a project not built with Create Alexa App, you can install it with following steps.

First, install this package, ESLint and the necessary plugins.

  ```sh
  npm install --save-dev eslint-config-alexa-app babel-eslint@7.2.3 eslint@3.19.0 eslint-plugin-flowtype@2.33.0 eslint-plugin-import@2.2.0
  ```

Then create a file named `.eslintrc` with following contents in the root folder of your project:

  ```js
  {
    "extends": "alexa-app"
  }
  ```

  That's it! You can override the settings from `eslint-config-alexa-app` by editing the `.eslintrc` file. Learn more about [configuring ESLint](http://eslint.org/docs/user-guide/configuring) on the ESLint website.
