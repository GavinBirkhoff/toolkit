import isNil from './is-nil'
import isArrayLike from './is-array-like'
import getType from './get-type'
import isPrototype from './is-prototype'
import hasOwnProperty from './hasOwnProperty'

/**
 * Checks if a value is empty.
 *
 * A value is considered empty if it is `undefined`, `null`, an empty array or string,
 * an empty Map or Set object, or an object with no own properties.
 *
 * @param value - The value to check.
 * @returns `true` if the value is empty, else `false`.
 *
 * @example
 * ```
 * isEmpty(undefined) // => true
 * isEmpty(null) // => true
 * isEmpty('') // => true
 * isEmpty([]) // => true
 * isEmpty(new Map()) // => true
 * isEmpty(new Set()) // => true
 * isEmpty({}) // => true
 * isEmpty({ prop: 'value' }) // => false
 * isEmpty([1, 2, 3]) // => false
 * isEmpty('hello') // => false
 * isEmpty(new Map([['key', 'value']])) // => false
 * isEmpty(new Set([1, 2, 3])) // => false
 * ```
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
