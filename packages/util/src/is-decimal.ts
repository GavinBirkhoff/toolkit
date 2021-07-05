import isNumber from './is-number'

export default (num: any): boolean => isNumber(num) && num % 1 !== 0
