import isNil from './is-nil'
/**
 * @description
 * @param value
 * @returns
 */
const toString = (value: any): string => {
  if (isNil(value)) return ''
  return value.toString()
}

export default toString
