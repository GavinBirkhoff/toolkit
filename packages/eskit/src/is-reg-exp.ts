import isType from './is-type'
/**
 * Determines whether the given value is a regular expression.
 *
 * @param value The value to check.
 * @returns `true` if the value is a regular expression, else `false`.
 *
 * @example
 * isRegExp(/ab+c/i) // => true
 * isRegExp('hello') // => false
 */
const isRegExp = (value: unknown): value is RegExp => isType('RegExp', value)

export default isRegExp
