import hasOwnProperty from './hasOwnProperty'

/**
 * Deep clone obj
 * @param obj Target object
 * @returns Return A new object
 * @since 1.0.0
 * @example
 * // returns object
 * deepClone(object)
 * @todo Type optimization, Algorithm optimization
 */
const deepClone = <T>(obj: T): Partial<T> => {
  const objClone: any = Array.isArray(obj) ? [] : {}
  if (obj && typeof obj === 'object') {
    for (const key in obj) {
      if (hasOwnProperty.call(obj, key)) {
        if (obj[key] && typeof obj[key] === 'object') {
          objClone[key] = deepClone(obj[key])
        } else {
          objClone[key] = obj[key]
        }
      }
    }
  }
  return objClone
}

export default deepClone
