import isFunction from './is-function'
import isEqual from './is-equal'
/**
 * @description More complex types
 * @param {any} value The value to compare.
 * @param {any} other The other value to compare.
 * @param {Function} [fn] The function to customize comparisons.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * function isGreeting(value) {
 *   return /^h(?:i|ello)$/.test(value)
 * }
 *
 * function customizer(objValue, othValue) {
 *   if (isGreeting(objValue) && isGreeting(othValue)) {
 *     return true
 *   }
 * }
 *
 * const array = ['hello', 'goodbye']
 * const other = ['hi', 'goodbye']
 *
 * isEqualWith(array, other, customizer)
 * // true
 */
const isEqualWith = <T>(value: T, other: T, fn: (v1: T, v2: T) => boolean): boolean => {
  if (!isFunction(fn)) {
    return isEqual(value, other)
  }
  return !!fn(value, other)
}
export default isEqualWith
