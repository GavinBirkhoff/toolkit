/**
 * @description check a value typeof is object
 * @param {any} value The value to check
 * @returns {boolean}
 * @example
 * isObjectLike({})
 * // true
 * isObjectLike([1, 2, 3]) //
 * // true
 * isObjectLike(Function)
 * // false
 * isObjectLike(null)
 * // false
 */

const isObjectLike = (value: any): boolean => {
  return value !== null && typeof value === 'object'
}

export default isObjectLike
