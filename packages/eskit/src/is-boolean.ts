import isType from './is-type'
/**
 * @description isBoolean
 * @param {any} value
 * @returns {boolean}
 */
const isBoolean = (value: any): value is boolean => value === true || value === false || isType('boolean', value)
export default isBoolean
