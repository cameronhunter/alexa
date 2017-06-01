# babel-preset-alexa-app

This package includes the Babel preset used by [Create Alexa App](https://github.com/cameronhunter/alexa/tree/master/packages/create-alexa-app).<br>
Please refer to its documentation:

* [Getting Started](https://github.com/cameronhunter/alexa/blob/master/packages/create-alexa-app/README.md#getting-started) – How to create a new app.
* [User Guide](https://github.com/cameronhunter/alexa/blob/master/packages/alexa-scripts/template/README.md) – How to develop apps bootstrapped with Create Alexa App.

## Usage in Create Alexa App Projects

The easiest way to use this configuration is with [Create Alexa App](https://github.com/cameronhunter/alexa/tree/master/packages/create-alexa-app), which includes it by default. **You don’t need to install it separately in Create Alexa App projects.**

## Usage Outside of Create Alexa App

If you want to use this Babel preset in a project not built with Create Alexa App, you can install it with following steps.

First, [install Babel](https://babeljs.io/docs/setup/).

Then create a file named `.babelrc` with following contents in the root folder of your project:

  ```js
  {
    "presets": ["alexa-app"]
  }
  ```
