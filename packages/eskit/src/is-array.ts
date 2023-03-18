import isType from './is-type'
/**
 * Determine whether an object is of type Array
 * @param {any} value Target value
 * @returns {boolean} Is it of type Array
 * @since 1.0.0
 * @example
 * // returns true
 * isArray([])
 */
const isArray = (value: any): value is Array<any> => (Array.isArray ? Array.isArray(value) : isType('Array', value))

export default isArray
