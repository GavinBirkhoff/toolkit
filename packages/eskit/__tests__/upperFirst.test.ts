import { upperFirst } from '../src'
describe('upperFirst', () => {
  it('should capitalize the first character of a string', () => {
    const input = 'hello world'
    const expectedOutput = 'Hello world'
    const actualOutput = upperFirst(input)
    expect(actualOutput).toBe(expectedOutput)
  })

  it('should return an empty string when given an empty string', () => {
    const input = ''
    const expectedOutput = ''
    const actualOutput = upperFirst(input)
    expect(actualOutput).toBe(expectedOutput)
  })

  it('should return the original string when given a string with only one character', () => {
    const input = 'a'
    const expectedOutput = 'A'
    const actualOutput = upperFirst(input)
    expect(actualOutput).toBe(expectedOutput)
  })
})
