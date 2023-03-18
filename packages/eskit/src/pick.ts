import each from './each'
import hasOwnProperty from './hasOwnProperty'
import { ObjectType } from './types'

/**
 * Creates an object composed of the picked `object` properties.
 * @category Object
 * @param {Object} object The source object.
 * @param {T[]} [paths] The property paths to pick.
 * @returns {Object} Returns the new object.
 * @since 1.0.0
 * @example
 * const object = { 'a': 1, 'b': '2', 'c': 3 }
 * // returns => { 'a': 1, 'c': 3 }
 * pick(object, ['a', 'c'])
 */
const pick = <T>(object: ObjectType<T>, ...paths: T[]): ObjectType<T> => {
  if (object === null) return {}
  const result: ObjectType<T> = {}
  each(paths, (path) => {
    if (hasOwnProperty.call(object, path)) {
      result[path] = object[path]
    }
  })
  return result
}

export default pick
