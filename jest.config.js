module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
  testPathIgnorePatterns: ['<rootDir>/dist/'],
  moduleNameMapper: {
    'src/(.*)': '<rootDir>/src/$1',
  },
  snapshotFormat: {
    printBasicPrototype: false,
  },
};
