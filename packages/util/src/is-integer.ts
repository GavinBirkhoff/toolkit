import isNumber from './is-number'
/**
 * @description
 * @param {*} num
 *
 */
const isInteger = Number.isInteger
  ? Number.isInteger
  : (num: any): boolean => {
      return isNumber(num) && num % 1 === 0
    }

export default isInteger
