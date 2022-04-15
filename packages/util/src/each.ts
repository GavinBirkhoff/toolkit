import hasOwnProperty from './hasOwnProperty'
import isArray from './is-array'
import isObject from './is-object'

/**
 * @description each array and object
 * @param {Array|Object} elements target
 * @param {Function} func a callback for item of elements
 */

const each = (elements: any[] | Record<string, any>, func: (v: any, k: any) => any): void => {
  if (!elements) {
    return
  }
  let rst
  if (isArray(elements)) {
    for (let i = 0, len = elements.length; i < len; i++) {
      rst = func(elements[i], i)
      if (rst === false) {
        break
      }
    }
  } else if (isObject(elements)) {
    for (const k in elements) {
      if (hasOwnProperty.call(elements, k)) {
        rst = func(elements[k], k)
        if (rst === false) {
          break
        }
      }
    }
  }
}

export default each
