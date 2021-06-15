import isArray from './is-array'
export default (arr: number[]): number | undefined => {
  if (!isArray(arr)) {
    return undefined
  }
  return Math.min.apply(null, arr)
}
