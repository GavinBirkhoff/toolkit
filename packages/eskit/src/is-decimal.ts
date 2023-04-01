import isNumber from './is-number'
/**
 * Checks if a number is a decimal.
 *
 * @param num - The number to check.
 * @returns `true` if the number is a decimal, else `false`.
 *
 * @example
 * ```
 * isDecimal(1.5) // => true
 * isDecimal(3) // => false
 * isDecimal('1.23') // => false
 * ```
 */
const isDecimal = (num: unknown): boolean => isNumber(num) && num % 1 !== 0
export default isDecimal
