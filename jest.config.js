const nextJest = require('next/jest');

/** @type {import('jest').Config} */
const createJestConfig = nextJest({
  dir: './',
});

const config = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // Resolves @/ to src/
    '^@/components/(.*)$': '<rootDir>/src/components/$1', // Resolves components
  },
};

module.exports = createJestConfig(config);
