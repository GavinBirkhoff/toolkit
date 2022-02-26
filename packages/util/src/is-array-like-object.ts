import isArrayLike from './is-array-like'
import isObject from './is-object'

/**
 * @description
 * @param value
 * @returns
 * @example
 * isArrayLike([1, 2, 3])
 * // => true
 *
 * isArrayLike(document.body.children)
 * // => true
 *
 * isArrayLike('abc')
 * // => false
 *
 * isArrayLike(Function)
 * // => false
 */

const isArrayLikeObject = (value: any): boolean => {
  return isObject(value) && isArrayLike(value)
}

export default isArrayLikeObject
