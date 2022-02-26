/**
 * @description
 * @param type
 * @param value
 * @returns
 */
const isType = (type: string, value: unknown): boolean =>
  Object.prototype.toString.call(value) === '[object ' + type + ']'
export default isType
