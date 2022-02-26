import isType from './is-type'
/**
 * @description
 * @param value
 * @returns
 */
const isString = (value: any): value is string => {
  return isType('String', value)
}
export default isString
