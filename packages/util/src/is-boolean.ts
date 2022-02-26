import isType from './is-type'
/**
 * @description
 * @param {*} value
 * @returns {Boolean}
 */
const isBoolean = (value: any): value is boolean => value === true || value === false || isType('Boolean', value)
export default isBoolean
