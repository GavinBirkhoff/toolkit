import isType from './is-type'
/**
 * Checks if a given value is a string.
 *
 * @param value The value to check.
 * @returns Returns `true` if the given value is a string, else `false`.
 *
 * @example
 * isString('hello') // => true
 * isString(123) // => false
 */
const isString = (value: unknown): value is string => {
  return isType('String', value)
}
export default isString
