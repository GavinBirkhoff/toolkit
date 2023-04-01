/**
 * Checks if a value is array-like.
 *
 * @param value - The value to check.
 * @returns `true` if the value is array-like, else `false`.
 *
 * @example
 * ```
 * isArrayLike('abc') // => true
 * isArrayLike([]) // => true
 * isArrayLike({ 0: 'a', 1: 'b', 2: 'c', length: 3 }) // => true
 * isArrayLike(Function) // => false
 * ```
 */
const isArrayLike = (value: any): boolean => {
  return value !== null && typeof value !== 'function' && isFinite(value.length)
}

export default isArrayLike
