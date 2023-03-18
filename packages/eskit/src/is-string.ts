import isType from './is-type'
/**
 * Determine whether an object is of type String
 * @param {*} value  Target value
 * @returns {boolean}  Is it of type String
 * @since 1.0.0
 * @example
 * // returns true
 * isString('')
 */

const isString = (value: unknown): value is string => {
  return isType('String', value)
}
export default isString
