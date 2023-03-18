/**
 * Determine whether an object is of type ArrayLike
 * @param {*} value The value to check
 * @returns {boolean} Is it of type ArrayLike
 * @since 1.0.0
 * @example
 * // returns true
 * isArrayLike([1, 2, 3])
 * @example
 * // returns true
 * isArrayLike(document.body.children)
 * @example
 * // returns true
 * isArrayLike('abc')
 * @example
 * // returns false
 * isArrayLike(Function)
 */
const isArrayLike = (value: any): boolean => {
  return value !== null && typeof value !== 'function' && isFinite(value.length)
}

export default isArrayLike
