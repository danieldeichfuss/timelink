/** @type {import('ts-jest').JestConfigWithTsJest} */
const config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    chalk: '<rootDir>/mocks/chalk.js',
  },
  clearMocks: true,
};

// eslint-disable-next-line no-undef
module.exports = config;
