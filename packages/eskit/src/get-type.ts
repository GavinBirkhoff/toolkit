const toString = Object.prototype.toString

/**
 * Get the type of a value
 *
 * @param value - The value to get the type of
 * @returns The type of the value
 *
 * @example
 * ```
 * getType(42) // "Number"
 * getType("hello") // "String"
 * getType([]) // "Array"
 * getType(null) // "Null"
 * getType(undefined) // "Undefined"
 * getType({}) // "Object"
 * ```
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
