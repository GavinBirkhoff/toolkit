import each from './each'
import hasOwnProperty from './hasOwnProperty'
import { ObjectType } from './types'

/**
 * @description Creates an object composed of the picked `object` properties.
 * @since 0.1.0
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to pick.
 * @returns {Object} Returns the new object.
 * @example
 *
 * const object = { 'a': 1, 'b': '2', 'c': 3 }
 *
 * pick(object, ['a', 'c'])
 * // => { 'a': 1, 'c': 3 }
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
