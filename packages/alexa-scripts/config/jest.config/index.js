module.exports = {
  collectCoverageFrom: ['src/**/*.js'],
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.js',
    '<rootDir>/src/**/?(*.)(spec|test).js',
  ],
  testEnvironment: 'node',
  transform: {
    '^.+\\.js$': require.resolve('./babelTransform')
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.js$']
};
