import isArray from './is-array'
/**
 * Returns the smallest number in an array of numbers.
 * Returns undefined if the input array is not an array or is empty.
 *
 * @example
 * min([3, 1, 4, 1, 5, 9]) // returns 1
 * min([]) // returns undefined
 *
 * @param arr An array of numbers
 * @returns The smallest number in the array, or undefined if the input is not an array or is empty
 */
const min = (arr: number[]): number | undefined => {
  if (!isArray(arr)) {
    return undefined
  }
  return Math.min.apply(null, arr)
}
export default min
