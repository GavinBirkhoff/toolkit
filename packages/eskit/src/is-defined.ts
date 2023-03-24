/**
 * Checks if a value is defined (not undefined or null).
 *
 * @param val - The value to check.
 * @returns `true` if the value is defined, `false` otherwise.
 * @example
 *
 * ```typescript
 * if (isDefined(value)) {
 *   doSomethingWithValue(value)
 * }
 * ```
 * @since 1.0.0
 */
const isDefined = <T>(val: T | undefined | null): val is T => {
  return val !== undefined && val !== null
}
export default isDefined
