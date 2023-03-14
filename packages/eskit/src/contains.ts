import isArrayLike from './is-array-like'
/**
 * Check whether the array or array like contains a value
 * @param {Array | string} arr Target array or string
 * @param {any} value Target value
 * @returns {boolean}
 * @since 1.0.0
 * @example
 * // returns true
 * contains([1,2,3],2)
 * @example
 * // returns true
 * contains("hello",'h')
 * @example
 * // returns false
 * contains([1,2,3],2,2)
 */
const contains = (arr: any[] | string, value: any, position?: number): boolean => {
  const positionValue = position || -1
  if (isArrayLike(arr)) {
    if (arr.includes !== undefined) {
      return arr.includes(value, position)
    }
    return arr.indexOf(value) > positionValue
  }
  return false
}

export default contains
