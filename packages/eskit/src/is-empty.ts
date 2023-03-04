import isNil from './is-nil'
import isArrayLike from './is-array-like'
import getType from './get-type'
import isPrototype from './is-prototype'
import hasOwnProperty from './hasOwnProperty'

/**
 * @description Checks if `value` is an empty object, collection, map, or set.
 * @param {any} value
 * @returns {boolean}
 * @example
 *
 * isEmpty(null)
 * // => true
 *
 * isEmpty(true)
 * // => true
 *
 * isEmpty(1)
 * // => true
 *
 * isEmpty([1, 2, 3])
 * // => false
 *
 * isEmpty('abc')
 * // => false
 *
 * isEmpty({ 'a': 1 })
 * // => false
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
