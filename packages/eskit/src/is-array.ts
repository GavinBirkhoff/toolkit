import isType from './is-type'
/**
 * @description isArray
 * @param {any} value
 * @returns
 */
const isArray = (value: any): value is Array<any> => (Array.isArray ? Array.isArray(value) : isType('Array', value))

export default isArray
