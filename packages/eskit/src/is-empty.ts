import isNil from './is-nil'
import isArrayLike from './is-array-like'
import getType from './get-type'
import isPrototype from './is-prototype'
import hasOwnProperty from './hasOwnProperty'

/**
 * Determine whether an object is of type Empty
 * @param {any} value Checks if `value` is an empty object, collection, map, or set.
 * @returns {boolean}  Is it of type Empty
 * @since 1.0.0
 * @example
 * // returns true
 * isEmpty(null)
 * @example
 * // returns true
 * isEmpty(true)
 * @example
 * // returns true
 * isEmpty(1)
 * @example
 * // returns false
 * isEmpty([1, 2, 3])
 * @example
 * // returns false
 * isEmpty('abc')
 * @example
 * // returns false
 * isEmpty({ 'a': 1 })
 */
const isEmpty = (value: any): boolean => {
  if (isNil(value)) {
    return true
  }
  if (isArrayLike(value)) {
    return !value.length
  }
  const type = getType(value)
  if (type === 'Map' || type === 'Set') {
    return !value.size
  }
  if (isPrototype(value)) {
    return !Object.keys(value).length
  }
  for (const key in value) {
    if (hasOwnProperty.call(value, key)) {
      return false
    }
  }
  return true
}

export default isEmpty
