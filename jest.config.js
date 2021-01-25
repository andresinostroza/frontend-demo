module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/tests']
}
