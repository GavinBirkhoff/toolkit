import isArrayLike from './is-array-like'
/**
 * @description Check whether the array or array like contains a value
 * @param {Array | String} arr target array
 * @param {any} value target value
 * @returns {boolean}
 * @example
 * contains([1,2,3],2)
 * // true
 *
 * contains("hello",'h')
 * // true
 *
 * contains([1,2,3],2,2)
 * // false
 */
const contains = (arr: any[] | string, value: any, position?: number): boolean => {
   const positionValue = position || -1
   if (isArrayLike(arr)) {
      if (arr.includes !== undefined) {
         return arr.includes(value, position)
      }
      return arr.indexOf(value) > positionValue
   }
   return false
}

export default contains
