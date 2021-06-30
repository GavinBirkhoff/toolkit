import isString from './is-string'

/**
 * endsWith('abc', 'c')
 * // => true
 *
 * endsWith('abc', 'b')
 * // => false
 *
 * endsWith('abc', 'b', 2)
 * // => true
 *
 * endsWith('abc', 'bc')
 * // => true
 */
export default (string: string, target: string, position?: number): boolean => {
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
