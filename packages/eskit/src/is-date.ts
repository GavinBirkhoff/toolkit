import isType from './is-type'
/**
 * Determine whether an object is of type Date
 * @param {*} value Target value
 * @returns {boolean}  Is it of type Date
 * @since 1.0.0
 * @example
 * // returns true
 * isDate(new Date())
 */
const isDate = (value: unknown): value is Date => isType('Date', value)
export default isDate
