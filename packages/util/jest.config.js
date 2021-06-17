module.exports = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testRegex: '(/__test__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
}
