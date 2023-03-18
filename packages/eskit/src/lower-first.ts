import toString from './to-string'
/**
 * Make first letters lower
 * @param  {string} value Target value
 * @returns {string}
 * @since 1.0.0
 * @example
 * // returns 'aB'
 * lowerFirst('AB')
 */

const lowerFirst = (value: string): string => {
  const str = toString(value)
  return str.charAt(0).toLowerCase() + str.substring(1)
}

export default lowerFirst
