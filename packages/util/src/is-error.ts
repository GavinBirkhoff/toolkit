import isType from './is-type'
/**
 * @description Check whether the value type is error
 * @param {Object} value 测试的值
 * @return {Boolean}
 */
const isError = function (value: any): value is Error {
  return isType('Error', value)
}

export default isError
