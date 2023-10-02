/** @type {import('ts-jest').JestConfigWithTsJest} */
const path = require('path')
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  verbose: true,
  collectCoverage: false,
  collectCoverageFrom: ["src/**/*.{ts,tsx}"],
  coverageDirectory: 'coverage',
  setupFilesAfterEnv: ['<rootdir>/jestsetup.ts'],
};