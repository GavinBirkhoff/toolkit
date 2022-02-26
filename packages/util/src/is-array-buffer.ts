import isType from './is-type'
/**
 * @description
 * @param value
 * @returns
 */

const isArrayBuffer = (value: unknown): value is Array<unknown> =>
  Array.isArray ? Array.isArray(value) : isType('ArrayBuffer', value)

export default isArrayBuffer
