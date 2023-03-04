import isType from './is-type'
/**
 * @description isSting
 * @param {any} value
 * @returns {boolean}
 */

const isString = (value: any): value is string => {
  return isType('String', value)
}
export default isString
