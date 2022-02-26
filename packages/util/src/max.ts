import isArray from './is-array'
/**
 * @description
 * @param arr
 * @returns
 */
const max = (arr: number[]): number | undefined => {
  if (!isArray(arr)) {
    return undefined
  }
  return Math.max.apply(null, arr)
}
export default max
