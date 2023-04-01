import isType from './is-type'
/**
 * Checks if a value is an array.
 *
 * @param value - The value to check.
 * @returns `true` if the value is an array, else `false`.
 *
 * @example
 * ```
 * isArray('abc') // => false
 * isArray([]) // => true
 * isArray({ 0: 'a', 1: 'b', 2: 'c', length: 3 }) // => false
 * ```
 */
const isArray = (value: any): value is Array<any> => (Array.isArray ? Array.isArray(value) : isType('Array', value))

export default isArray
