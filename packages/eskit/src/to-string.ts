import isNil from './is-nil'
/**
 * To string
 * @param {*} value
 * @returns {string}
 * @since 1.0.0
 * @example
 * // returns '1'
 * toString(1)
 */
const toString = (value: any): string => {
  if (isNil(value)) return ''
  return value.toString()
}

export default toString
