import hasOwnProperty from './hasOwnProperty'
import isArray from './is-array'
import { ObjectType } from './types'

/**
 * Recursively extends an object or array.
 *
 * @typeparam T The type of the parent object.
 * @param parent The parent object to extend.
 * @param child The child object to merge into the parent object.
 * @returns The extended object.
 *
 * @example
 * const parent = { a: { b: 1 } };
 * const child = { a: { c: 2 } };
 *
 * extendDeep(parent, child); // { a: { b: 1, c: 2 } }
 */
const extendDeep = (parent: ObjectType<any>, child: ObjectType<any> = {}): ObjectType<any> => {
  for (const i in parent) {
    if (hasOwnProperty.call(parent, i)) {
      if (typeof parent[i] === 'object') {
        child[i] = isArray(parent[i]) ? [] : {}
        extendDeep(parent[i], child[i])
      } else {
        child[i] = parent[i]
      }
    }
  }
  return child
}
export default extendDeep
