import isArrayLike from './is-array-like'

export default (arr: any[], value: any): boolean => {
  if (isArrayLike(arr)) {
    return arr.indexOf(value) > -1
  }
  return false
}
