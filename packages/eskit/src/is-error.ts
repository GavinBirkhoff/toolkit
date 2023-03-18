import isType from './is-type'
/**
 * Determine whether an object is of type Error
 * @param {*} value Target value
 * @return {boolean}
 * @since 1.0.0
 * @example
 * // return true
 * isError(new Error())
 */
const isError = function (value: unknown): value is Error {
  return isType('Error', value)
}

export default isError
