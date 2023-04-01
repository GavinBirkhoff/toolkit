import isType from './is-type'
/**
 * Checks if a value is a number.
 *
 * @param value - The value to check.
 * @returns Returns `true` if the value is a number, else `false`.
 *
 * @example
 * isNumber(42); // true
 * isNumber('42'); // false
 */
const isNumber = (value: unknown): value is number => isType('Number', value)
export default isNumber
