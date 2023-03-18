import isType from './is-type'
/**
 * Determine whether an object is of type Arguments
 * @param {*} value
 * @returns {boolean}
 * @since 1.0.0
 * @example
 * // returns true or false
 * isArguments(arguments)
 */
const isArguments = (value: unknown): boolean => isType('Arguments', value)
export default isArguments
