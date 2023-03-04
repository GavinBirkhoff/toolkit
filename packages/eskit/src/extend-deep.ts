import hasOwnProperty from './hasOwnProperty'
import isArray from './is-array'
import { ObjectType } from './types'

/**
 * @description extendDeep
 * @param  {ObjectType<any>} parent
 * @param  {ObjectType<any>={}} child
 * @returns {ObjectType}
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
