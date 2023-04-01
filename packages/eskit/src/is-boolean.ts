import isType from './is-type'
/**
 * Checks if a value is a boolean.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a boolean, else `false`.
 *
 * @example
 * ```
 * isBoolean(true) // => true
 * isBoolean(false) // => true
 * isBoolean(0) // => false
 * isBoolean('true') // => false
 * ```
 */
const isBoolean = (value: unknown): value is boolean => value === true || value === false || isType('boolean', value)
export default isBoolean
