import { ObjectType } from './types'
/**
 * Freeze obj and keys
 * @param {Object} obj need to freeze target
 * @since 1.0.0
 * @example
 * constantize(obj)
 */
const constantize = (obj: ObjectType<any>): void => {
  Object.freeze(obj)
  Object.keys(obj).forEach((key, i) => {
    if (typeof obj[key] === 'object') {
      constantize(obj[key])
    }
  })
}

export default constantize
