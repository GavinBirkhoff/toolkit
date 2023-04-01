import toString from './to-string'
/**
 * Converts the first character of a string to uppercase.
 *
 * @param value - The string to modify.
 * @returns The modified string.
 *
 * @example
 * upperFirst('hello world') // Returns 'Hello world'
 */
const upperFirst = (value: string): string => {
  const str = toString(value)
  return str.charAt(0).toUpperCase() + str.substring(1)
}

export default upperFirst
