const path = require("path");

const fromRoot = (d) => path.join(__dirname, d);
module.exports = {
  roots: [fromRoot("app"), fromRoot("content")],
  resetMocks: true,
  coveragePathIgnorePatterns: [],
  collectCoverageFrom: ["**/app/**/*.{js,ts,tsx}"],
  coverageThreshold: null,
  // The test environment that will be used for testing
  testEnvironment: "jsdom",
  // A map from regular expressions to paths to transformers
  transform: {
    '^.+\\.tsx?$': 'esbuild-jest',
    '^.+\\.jsx?$': 'esbuild-jest',
  },
  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  // transformIgnorePatterns: [
  //   "/node_modules/",
  //   "\\.pnp\\.[^\\/]+$"
  // ],
  // The paths to modules that run some code to configure or set up the testing environment before each test
  // setupFiles: [],

  // A list of paths to modules that run some code to configure or set up the testing framework before each test
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  // An array of directory names to be searched recursively up from the requiring module's location
  moduleDirectories: ['node_modules', fromRoot('tests')],
  // An array of file extensions your modules use
  moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx'],
  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
  moduleNameMapper: {
    '~/(.*)': fromRoot('app/$1'),
  },
  // Watchプラグインを Jest に接続するには、Jest の設定で watchPlugins にそのパスを追加します。
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ]
};
