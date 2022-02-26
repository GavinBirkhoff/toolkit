import isType from './is-type'
/**
 * @description
 * @param {*} value
 * @returns {Boolean}
 */
const isDate = (value: any): value is Date => isType('Date', value)
export default isDate
