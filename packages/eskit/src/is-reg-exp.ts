import isType from './is-type'
/**
 * Determine whether an object is of type RegExp
 * @param  {*} value Target value
 * @returns {boolean}  Is it of type RegExp
 * @since 1.0.0
 * @example
 * // returns true
 * isRegExp(/\d\D/)
 */

const isRegExp = (value: any): value is RegExp => isType('RegExp', value)

export default isRegExp
