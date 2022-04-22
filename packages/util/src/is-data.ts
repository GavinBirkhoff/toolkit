import isType from './is-type'
/**
 * @description isDate
 * @param {any} value
 * @returns {boolean}
 */
const isDate = (value: any): value is Date => isType('Date', value)
export default isDate
