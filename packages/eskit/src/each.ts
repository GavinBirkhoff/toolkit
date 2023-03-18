import hasOwnProperty from './hasOwnProperty'
import isArray from './is-array'
import isObject from './is-object'

/**
 * Each array and object
 * @param {Array|Object} elements target
 * @param {Function} func a callback for item of elements
 * @since 1.0.0
 * @example
 * each(object, ()=>{})
 * each(array, ()=>{})
 * @todo Type optimization
 */

const each = (elements: any[] | Record<string, any>, func: (v: any, k: any, ele: any) => any): void => {
  if (!elements) {
    return
  }
  let rst
  if (isArray(elements)) {
    for (let i = 0, len = elements.length; i < len; i++) {
      rst = func(elements[i], i, elements)
      if (rst === false) {
        break
      }
    }
  } else if (isObject(elements)) {
    for (const k in elements) {
      if (hasOwnProperty.call(elements, k)) {
        rst = func(elements[k], k, elements)
        if (rst === false) {
          break
        }
      }
    }
  }
}

export default each
