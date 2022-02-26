import isNumber from './is-number'

/**
 * @description
 * @param num
 * @returns
 */
const isEven = function (num: any): boolean {
  return isNumber(num) && num % 2 === 0
}

export default isEven
