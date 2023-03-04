import isArray from './is-array'
/**
 * @description min
 * @param {number[]} arr
 * @returns {number | undefined}
 */
const min = (arr: number[]): number | undefined => {
  if (!isArray(arr)) {
    return undefined
  }
  return Math.min.apply(null, arr)
}
export default min
