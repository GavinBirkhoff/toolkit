import toString from './to-string'
/**
 * The first letter should be capitalized
 * @param {string} value
 * @returns {string} value
 * @since 1.0.0
 * @example
 * // returns 'First'
 * upperFirst('first')
 */
const upperFirst = (value: string): string => {
  const str = toString(value)
  return str.charAt(0).toUpperCase() + str.substring(1)
}

export default upperFirst
