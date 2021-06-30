import isString from './is-string'
/**
 * startsWith('abc', 'a')
 * // => true
 *
 * startsWith('abc', 'b')
 * // => false
 *
 * startsWith('abc', 'b', 1)
 * // => true
 */
export default (string: string, target: string, position?: number): boolean => {
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
