import isString from './is-string'
/**
 * @description Whether a string starts with a character
 * @param string
 * @param target
 * @param position
 * @returns {boolean}
 * @example
 * startsWith('abc', 'a')
 * // => true
 *
 * startsWith('abc', 'b')
 * // => false
 *
 * startsWith('abc', 'b', 1)
 * // => true
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
