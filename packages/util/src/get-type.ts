const toString = Object.prototype.toString

/**
 * @description
 * @param  {any} value
 * @returns string
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
