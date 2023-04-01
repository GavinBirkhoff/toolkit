import isObjectLike from './is-object-like'
import isArrayLike from './is-array-like'
import isString from './is-string'
/**
 * Determines if two values are equal. Supports objects, arrays, and primitives.
 * @param value The value to compare.
 * @param other The other value to compare.
 * @returns True if the values are equal, false otherwise.
 *
 * @example
 * ```
 * isEqual([1, 2, 3], [1, 2, 3]) // => true
 * isEqual({a: 1, b: {c: 2}}, {a: 1, b: {c: 2}}) // => true
 * isEqual('abc', 'abc') // => true
 * isEqual(1, 2) // => false
 * isEqual(null, undefined) // => false
 * ```
 */
const isEqual = (value: any, other: any): boolean => {
  if (value === other) {
    return true
  }
  if (!value || !other) {
    return false
  }
  if (isString(value) || isString(other)) {
    return false
  }
  if (isArrayLike(value) || isArrayLike(other)) {
    if (value.length !== other.length) {
      return false
    }
    let rst = true
    for (let i = 0; i < value.length; i++) {
      rst = isEqual(value[i], other[i])
      if (!rst) {
        break
      }
    }
    return rst
  }
  if (isObjectLike(value) || isObjectLike(other)) {
    const valueKeys = Object.keys(value)
    const otherKeys = Object.keys(other)
    if (valueKeys.length !== otherKeys.length) {
      return false
    }
    let rst = true
    for (let i = 0; i < valueKeys.length; i++) {
      rst = isEqual(value[valueKeys[i]], other[valueKeys[i]])
      if (!rst) {
        break
      }
    }
    return rst
  }
  return false
}

export default isEqual
