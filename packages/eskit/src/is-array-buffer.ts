import isType from './is-type'
/**
 * Determine whether an object is of type ArrayBuffer
 * @param {*} value
 * @returns {boolean}
 * @since 1.0.0
 * @example
 * // returns true or false
 * isArrayBuffer(ab)
 */

const isArrayBuffer = (value: unknown): value is Array<unknown> => isType('ArrayBuffer', value)

export default isArrayBuffer
