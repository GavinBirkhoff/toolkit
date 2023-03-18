import hasOwnProperty from './hasOwnProperty'
import isArray from './is-array'
import { ObjectType } from './types'

/**
 * Extend an object deeply
 * @param  {Object} parent
 * @param  {Object} child
 * @returns {Object}
 * @since 1.0.0
 * @example
 * // returns object
 * extendDeep(obj, sub)
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
