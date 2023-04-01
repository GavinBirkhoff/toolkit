import isType from './is-type'
/**
 * Checks if a value is a Date object.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a Date object, else `false`.
 *
 * @example
 * ```
 * isDate(new Date()) // => true
 * isDate(Date.now()) // => false
 * isDate('2022-03-30') // => false
 * ```
 */
const isDate = (value: unknown): value is Date => isType('Date', value)
export default isDate
