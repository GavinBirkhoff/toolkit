/**
 * Determine whether a value is of argument type
 * @param  {string} type Type you in
 * @param  {unknown} value Target value
 * @returns {boolean}  Is it of the type
 * @since 1.0.0
 * @example
 * // returns true
 * isType('String', '')
 */

const isType = (type: string, value: unknown): boolean =>
  Object.prototype.toString.call(value) === '[object ' + type + ']'
export default isType
