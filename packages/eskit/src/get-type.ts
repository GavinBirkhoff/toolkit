const toString = Object.prototype.toString

/**
 * @description getType
 * @param  {*} value
 * @returns {string}
 * @since 1.0.0
 * @example
 * // returns Array
 * getType([])
 */
const getType = (value: any): string => {
  let val
  if (value == null) {
    val = value === undefined ? '[object Undefined]' : '[object Null]'
  } else {
    val = toString.call(value)
  }
  return val.replace(/^\[object /, '').replace(/]$/, '')
}

export default getType
