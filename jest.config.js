/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  verbose: true,
  moduleFileExtensions: ['js', 'jsx'],
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '.(css|less|scss)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+.(js|jsx)$': 'babel-jest',
  },
  testEnvironment: 'jest-environment-jsdom',
};
