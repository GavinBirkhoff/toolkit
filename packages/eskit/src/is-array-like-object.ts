import isArrayLike from './is-array-like'
import isObject from './is-object'

/**
 * Determine whether an object is of type ArrayLikeObject
 * @param {*} value Target object
 * @returns {boolean} Is it of type ArrayLikeObject
 * @since 1.0.0
 * @example
 * // returns true
 * isArrayLike([1, 2, 3])
 * @example
 * // returns true
 * isArrayLike(document.body.children)
 * @example
 * // returns false
 * isArrayLike('abc')
 * @example
 * // returns false
 * isArrayLike(Function)
 */

const isArrayLikeObject = (value: unknown): boolean => {
  return isObject(value) && isArrayLike(value)
}

export default isArrayLikeObject
