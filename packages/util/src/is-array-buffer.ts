import isType from './is-type'
/**
 * @description isArrayBuffer
 * @param {any} value
 * @returns {boolean}
 */

const isArrayBuffer = (value: unknown): value is Array<unknown> =>
  Array.isArray ? Array.isArray(value) : isType('ArrayBuffer', value)

export default isArrayBuffer
