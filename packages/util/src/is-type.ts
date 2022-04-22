/**
 * @description isType
 * @param  {string} type
 * @param  {unknown} value
 * @returns {boolean}
 */

const isType = (type: string, value: unknown): boolean =>
  Object.prototype.toString.call(value) === '[object ' + type + ']'
export default isType
