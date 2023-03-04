import isType from './is-type'
/**
 * @description isNumber
 * @param {any} value
 * @returns {boolean}
 */
const isNumber = (value: any): value is number => isType('Number', value)
export default isNumber
