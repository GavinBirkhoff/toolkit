/**
 * Checks if a value is defined (not `undefined` or `null`).
 *
 * @typeParam T - The type of the value to check.
 * @param val - The value to check.
 * @returns `true` if the value is defined, else `false`.
 *
 * @example
 * ```
 * isDefined(1) // => true
 * isDefined('hello') // => true
 * isDefined(null) // => false
 * isDefined(undefined) // => false
 * ```
 */
const isDefined = <T>(val: T | undefined | null): val is T => {
  return val !== undefined && val !== null
}
export default isDefined
