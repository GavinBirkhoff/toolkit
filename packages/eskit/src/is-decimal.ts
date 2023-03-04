import isNumber from './is-number'
/**
 * @description isDecimal
 * @param {any} num
 * @returns {boolean}
 */
const isDecimal = (num: any): boolean => isNumber(num) && num % 1 !== 0
export default isDecimal
