import isArrayLike from './is-array-like'
/**
 * Call the function to execute each item of the array, filter out unnecessary items, and return a new array.
 * @param  {Array} arr
 * @param  {Function} func
 * @returns {Array}
 * @since 1.0.0
 * @example
 * // returns [3]
 * filter([1, 2, 3], (item) => item > 2)
 */

const filter = <T>(arr: T[], func: (v: T, idx?: number, arr?: T[]) => boolean): T[] => {
  if (!isArrayLike(arr)) {
    return arr
  }
  const result: T[] = []
  for (let index = 0; index < arr.length; index++) {
    const value = arr[index]
    if (func(value, index, arr)) {
      result.push(value)
    }
  }
  return result
}

export default filter
