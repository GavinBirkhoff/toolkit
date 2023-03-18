import isArray from './is-array'
/**
 * Returns the larger of a array.
 * @param {number[]} arr Target array
 * @returns {number | undefined}
 * @since 1.0.0
 * @example
 * // returns 3
 * max([1,2,3])
 */
const max = (arr: number[]): number | undefined => {
  if (!isArray(arr)) {
    return undefined
  }
  return Math.max.apply(null, arr)
}
export default max
