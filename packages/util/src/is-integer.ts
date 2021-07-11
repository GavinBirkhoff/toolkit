import isNumber from './is-number'

const isInteger = Number.isInteger
  ? Number.isInteger
  : (num: any): boolean => {
      return isNumber(num) && num % 1 === 0
    }

export default isInteger
