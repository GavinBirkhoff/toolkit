import toString from './to-string'
/**
 * Converts the first character of `value` to lower case.
 *
 * @param value The string to convert.
 * @returns Returns the converted string.
 *
 * @example
 * lowerFirst('Apple'); // => 'apple'
 */
const lowerFirst = (value: string): string => {
  const str = toString(value)
  return str.charAt(0).toLowerCase() + str.substring(1)
}

export default lowerFirst
