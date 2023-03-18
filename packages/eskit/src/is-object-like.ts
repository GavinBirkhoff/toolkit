/**
 * Determine whether an object is of type ObjectLike
 * @param {*} value Target value
 * @returns {boolean}  Is it of type ObjectLike
 * @since 1.0.0
 * @example
 * // returns true
 * isObjectLike({})
 * @example
 * // returns true
 * isObjectLike([1, 2, 3])
 * @example
 * // returns false
 * isObjectLike(Function)
 * @example
 * // returns false
 * isObjectLike(null)
 */

const isObjectLike = (value: unknown): boolean => {
  return value !== null && typeof value === 'object'
}

export default isObjectLike
