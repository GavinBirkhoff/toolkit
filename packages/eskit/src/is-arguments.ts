import isType from './is-type'
/**
 * @description isArguments
 * @param {any} value
 * @returns {boolean}
 */
const isArguments = (value: any): boolean => isType('Arguments', value)
export default isArguments
