const nextJest = require('next/jest')

const createJestConfig = nextJest({
    dir: './',
})

const customJestConfig = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    testEnvironment: 'jest-environment-jsdom',
    moduleNameMapping: {
        '^@/(.*)$': '<rootDir>/src/$1',
        '^@/components/InputField$': '<rootDir>/src/__mocks__/components/InputField',
    },
    testMatch: [
        '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
        '<rootDir>/src/**/*.(test|spec).{js,jsx,ts,tsx}'
    ],
    testPathIgnorePatterns: [
        '<rootDir>/src/__mocks__/',
        '<rootDir>/node_modules/'
    ],
    collectCoverageFrom: [
        'src/**/*.{js,jsx,ts,tsx}',
        '!src/**/*.d.ts',
        '!src/__tests__/**/*',
        '!src/__mocks__/**/*',
    ],
}

module.exports = createJestConfig(customJestConfig)