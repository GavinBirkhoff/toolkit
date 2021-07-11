/**
 * @description check value like array
 * @param {*} value The value to check
 * @returns {boolean}
 * @example
 * isArrayLike([1, 2, 3])
 * // true
 *
 * isArrayLike(document.body.children)
 * // true
 *
 * isArrayLike('abc')
 * // true
 *
 * isArrayLike(Function)
 * // false
 */
const isArrayLike = (value: any): boolean => {
  return value !== null && typeof value !== 'function' && isFinite(value.length)
}

export default isArrayLike
