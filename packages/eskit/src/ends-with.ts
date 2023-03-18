import isString from './is-string'

/**
 * Determine whether a string ends with the target characters
 * @param  {string} string A string
 * @param  {string} target Target characters
 * @param  {number} position?
 * @returns {boolean}
 * @example
 * endsWith('abc', 'c')
 * // => true
 * @example
 * endsWith('abc', 'b')
 * // => false
 * @example
 * endsWith('abc', 'b', 2)
 * // => true
 * @example
 * endsWith('abc', 'bc')
 * // => true
 */
const endsWith = (string: string, target: string, position?: number): boolean => {
  if (!isString(string)) {
    return false
  }
  const { length } = string
  position = position === undefined ? length : +position
  if (position < 0 || position != position) {
    position = 0
  } else if (position > length) {
    position = length
  }
  const end = position
  position -= target.length
  return position >= 0 && string.slice(position, end) == target
}

export default endsWith
