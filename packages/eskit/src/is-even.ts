import isNumber from './is-number'

/**
 * Checks if a number is even.
 * @param num - The number to check.
 * @returns Whether the number is even or not.
 *
 * @example
 * isEven(2); // true
 * isEven(3); // false
 */
const isEven = (num: number): boolean => {
  return isNumber(num) && num % 2 === 0
}

export default isEven
