import isNil from './is-nil'
/**
 * @description to string
 * @param {any} value
 * @returns {string}
 */
const toString = (value: any): string => {
  if (isNil(value)) return ''
  return value.toString()
}

export default toString
