import isArray from './is-array'
/**
 * Returns the smaller of a array.
 * @param {number[]} arr  Target array
 * @returns {number | undefined}
 * @since 1.0.0
 * @example
 * // returns 1
 * max([1,2,3])
 */
const min = (arr: number[]): number | undefined => {
  if (!isArray(arr)) {
    return undefined
  }
  return Math.min.apply(null, arr)
}
export default min
