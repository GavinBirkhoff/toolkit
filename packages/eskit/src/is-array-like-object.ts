import isArrayLike from './is-array-like'
import isObject from './is-object'

/**
 * Checks if a value is array-like.
 *
 * @param value - The value to check.
 * @returns `true` if the value is array-like, else `false`.
 *
 * @example
 * ```
 * isArrayLikeObject('abc') // => true
 * isArrayLikeObject([]) // => true
 * isArrayLikeObject(document.querySelectorAll('div')) // => true
 * isArrayLikeObject(Function) // => false
 * ```
 */

const isArrayLikeObject = (value: unknown): boolean => {
  return isObject(value) && isArrayLike(value)
}

export default isArrayLikeObject
