import isArray from './is-array'
/**
 * Returns the maximum value of a numeric array.
 * If the input value is not an array or the array is empty, returns `undefined`.
 *
 * @param arr - The array of numbers to search for the maximum value.
 * @returns The maximum value of the input array, or `undefined` if the input is not an array or the array is empty.
 *
 * @example
 * max([1, 2, 3, 4, 5]) // 5
 * max([]) // undefined
 * max(null) // undefined
 * max(undefined) // undefined
 */
const max = (arr: number[]): number | undefined => {
  if (!isArray(arr)) {
    return undefined
  }
  return Math.max.apply(null, arr)
}
export default max
