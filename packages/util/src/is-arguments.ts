import isType from './is-type'
/**
 * @description
 * @param value
 * @returns {Boolean}
 */
const isArguments = (value: any): boolean => isType('Arguments', value)
export default isArguments
