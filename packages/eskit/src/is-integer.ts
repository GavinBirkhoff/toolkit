import isNumber from './is-number'
/**
 * Is it an integer
 * @param {any} num Target value
 * @returns {boolean}
 * // returns true
 * isInteger(1)
 */
const isInteger = Number.isInteger
  ? Number.isInteger
  : (num: any): boolean => {
      return isNumber(num) && num % 1 === 0
    }

export default isInteger
