import isType from './is-type'
/**
 * Determine whether an object is of type Boolean
 * @param {*} value Target value
 * @returns {boolean}
 * @since 1.0.0
 * @example
 * // returns true
 * isBoolean(false)
 */
const isBoolean = (value: unknown): value is boolean => value === true || value === false || isType('boolean', value)
export default isBoolean
