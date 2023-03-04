import isArray from './is-array'
/**
 * @description max
 * @param {number[]} arr
 * @returns {number | undefined}
 */
const max = (arr: number[]): number | undefined => {
  if (!isArray(arr)) {
    return undefined
  }
  return Math.max.apply(null, arr)
}
export default max
