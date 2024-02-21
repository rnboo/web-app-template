const config = {
  roots: ['<rootDir>/src'],
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    url: 'http://localhost/',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)?$': 'babel-jest',
  },
  preset: 'ts-jest',
  globals: {},
  moduleNameMapper: {},
  transform: {
    '^.+\\.(ts|tsx)?$': [
      'ts-jest',
      {
        /* ts-jest config goes here in Jest */
      },
    ],
  },
};

module.exports = config;
