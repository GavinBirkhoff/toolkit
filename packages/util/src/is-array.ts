import isType from './is-type'
/**
 * @description
 * @param value
 * @returns
 */
const isArray = (value: unknown): value is Array<unknown> =>
  Array.isArray ? Array.isArray(value) : isType('Array', value)

export default isArray
