module.exports = {
    collectCoverageFrom: [
      '**/*.{js,jsx,ts,tsx}',
      '!**/*.d.ts',
      '!**/node_modules/**',
    ],
    coveragePathIgnorePatterns: [
      "node_modules",
      "<rootDir>/coverage",
      ".config",
      "<rootDir>/.next",
      "<rootDir>/.git",
      "<rootDir>/src/app/main.ts",
      "<rootDir>/.circleci"
  ],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    testPathIgnorePatterns: ['/node_modules/', '/.next/'],
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest'
    },
    transformIgnorePatterns: [
      '/node_modules/',
      '^.+\\.module\\.(css|sass|scss)$',
    ],
    moduleNameMapper: {
      '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    },
    verbose: true,
    snapshotSerializers: ["enzyme-to-json/serializer"],
    modulePaths: [
      "<rootDir>"
    ]
  }