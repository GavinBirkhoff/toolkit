import isNumber from './is-number'
/**
 * @description
 * @param num
 * @returns
 */
const isDecimal = (num: any): boolean => isNumber(num) && num % 1 !== 0
export default isDecimal
