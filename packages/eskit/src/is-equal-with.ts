import isFunction from './is-function'
import isEqual from './is-equal'
/**
 * Compare two values through a user-defined function.
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {Function} [fn] The function to customize comparisons.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @since 1.0.0
 * @example
 * // returns true or false
 * isEqualWith(array, other, customizer)
 */
const isEqualWith = <T>(value: T, other: T, fn: (v1: T, v2: T) => boolean): boolean => {
  if (!isFunction(fn)) {
    return isEqual(value, other)
  }
  return !!fn(value, other)
}
export default isEqualWith
