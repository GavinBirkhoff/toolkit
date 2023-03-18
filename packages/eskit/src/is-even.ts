import isNumber from './is-number'

/**
 * Is it an even number
 * @param {number} num Target value
 * @returns {boolean}
 * @since 1.0.0
 * @example
 * // returns true
 * isEven(2)
 */
const isEven = function (num: number): boolean {
  return isNumber(num) && num % 2 === 0
}

export default isEven
