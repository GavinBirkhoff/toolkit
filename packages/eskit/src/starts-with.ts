import isString from './is-string'
/**
 * Whether a string starts with a character
 * @param {string} string
 * @param {string} target
 * @param {number} position
 * @returns {boolean}
 * @example
 * // returns => true
 * startsWith('abc', 'a')
 * @example
 * // returns => false
 * startsWith('abc', 'b')
 * @example
 * // returns => true
 * startsWith('abc', 'b', 1)
 */
const startsWith = (string: string, target: string, position?: number): boolean => {
  if (!isString(string)) {
    return false
  }
  const { length } = string
  position = position == null ? 0 : position
  if (position < 0) {
    position = 0
  } else if (position > length) {
    position = length
  }
  target = `${target}`
  return string.slice(position, position + target.length) == target
}
export default startsWith
