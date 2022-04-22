import isNumber from './is-number'

/**
 * @description isEven
 * @param {any} num
 * @returns {boolean}
 */
const isEven = function (num: any): boolean {
  return isNumber(num) && num % 2 === 0
}

export default isEven
