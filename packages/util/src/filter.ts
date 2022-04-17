import isArrayLike from './is-array-like'
/**
 * @description
 * @param  {T[]} arr
 * @param  {(v:T,idx?:number,arr?:T[])=>boolean} func
 * @returns T
 */

const filter = <T>(arr: T[], func: (v: T, idx?: number, arr?: T[]) => boolean): T[] => {
  if (!isArrayLike(arr)) {
    return arr
  }
  const result: T[] = []
  for (let index = 0; index < arr.length; index++) {
    const value = arr[index]
    if (func(value, index, arr)) {
      result.push(value)
    }
  }
  return result
}

export default filter
