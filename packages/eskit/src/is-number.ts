import isType from './is-type'
/**
 * Determine whether an object is of type Number
 * @param {*} value  Target value
 * @returns {boolean}  Is it of type Number
 * @since 1.0.0
 * @example
 * // returns true
 * isNumber(1)
 */
const isNumber = (value: unknown): value is number => isType('Number', value)
export default isNumber
