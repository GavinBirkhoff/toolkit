import isType from './is-type'
/**
 * @description
 * @param value
 * @returns
 */
const isNumber = (value: any): value is number => isType('Number', value)
export default isNumber
