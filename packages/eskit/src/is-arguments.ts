import isType from './is-type'
/**
 * Tests whether a value is an `arguments` object.
 *
 * @param value The value to test.
 * @returns `true` if the value is an `arguments` object, `false` otherwise.
 *
 * @example
 * ```typescript
 * // Returns true
 * function sampleFunc() {
 *   return isArguments(arguments)
 * }
 * sampleFunc();
 * ```
 *
 * @example
 * ```typescript
 * // Returns false
 * isArguments([1,2,3]);
 * ```
 */
const isArguments = (value: unknown): boolean => isType('Arguments', value)
export default isArguments
