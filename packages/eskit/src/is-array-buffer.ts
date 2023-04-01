import isType from './is-type'
/**
 * Tests whether a value is an `ArrayBuffer` object.
 *
 * @param {unknown} value The value to test.
 * @return {value is ArrayBuffer} `true` if the value is an `ArrayBuffer` object, `false` otherwise.
 *
 * @example
 * ```typescript
 * // Returns false
 * isArrayBuffer([1,2,3]);
 * ```
 *
 * @example
 * ```typescript
 * // Returns true
 * const buffer = new ArrayBuffer(16);
 * isArrayBuffer(buffer);
 * ```
 */
const isArrayBuffer = (value: unknown): value is Array<unknown> => isType('ArrayBuffer', value)

export default isArrayBuffer
