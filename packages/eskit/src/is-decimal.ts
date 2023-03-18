import isNumber from './is-number'
/**
 * Determine whether an object is of type Decimal
 * @param {any} num Target value
 * @returns {boolean}  Is it of type Decimal
 * @since 1.0.0
 * @example
 * // returns true
 * isDecimal(1.1)
 */
const isDecimal = (num: any): boolean => isNumber(num) && num % 1 !== 0
export default isDecimal
