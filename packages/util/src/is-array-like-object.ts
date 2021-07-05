import isArrayLike from './is-array-like'
import isObject from './is-object'

export default (value: any): boolean => {
  /**
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
  return isObject(value) && isArrayLike(value)
}
