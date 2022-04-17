import toString from './to-string'
/**
 * @description The first letter should be capitalized
 * @param {string} value
 * @returns {string} value
 */
const upperFirst = (value: string): string => {
  const str = toString(value)
  return str.charAt(0).toUpperCase() + str.substring(1)
}

export default upperFirst
