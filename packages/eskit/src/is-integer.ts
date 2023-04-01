import isNumber from './is-number'
/**
 * Checks if a value is an integer.
 *
 * @param value The value to check.
 * @returns Returns `true` if `value` is an integer, else `false`.
 *
 * @example
 * ```typescript
 * isInteger(0); // true
 * isInteger(5); // true
 * isInteger(-10); // true
 * isInteger(2.5); // false
 * ```
 */
const isInteger = Number.isInteger
  ? Number.isInteger
  : (num: any): boolean => {
      return isNumber(num) && num % 1 === 0
    }

export default isInteger
