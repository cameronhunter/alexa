const babelJest = require('babel-jest');
const config = require('../babel.config');

module.exports = babelJest.createTransformer(config);
