import isFunction from './is-function'
import isEqual from './is-equal'
/**
 * Performs a deep comparison between two values to determine if they are equivalent.
 *
 * @param value The value to compare.
 * @param other The other value to compare.
 * @param fn The customizer function to use to compare values.
 * @returns Returns `true` if the values are equivalent, else `false`.
 *
 * @example
 * isEqualWith([1, 2, 3], [1, 2, 3], (v1, v2) => {
 *   if (Array.isArray(v1) && Array.isArray(v2)) {
 *     return v1.length === v2.length;
 *   }
 *   return undefined;
 * }); // => true
 */
const isEqualWith = <T>(value: T, other: T, fn: (v1: T, v2: T) => boolean): boolean => {
  if (!isFunction(fn)) {
    return isEqual(value, other)
  }
  return !!fn(value, other)
}
export default isEqualWith
