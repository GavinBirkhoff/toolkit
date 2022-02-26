import isArray from './is-array'
/**
 * @description
 * @param arr
 * @returns
 */
const min = (arr: number[]): number | undefined => {
  if (!isArray(arr)) {
    return undefined
  }
  return Math.min.apply(null, arr)
}
export default min
