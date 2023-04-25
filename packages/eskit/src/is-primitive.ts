/**
 * Determines whether a given value is a JavaScript primitive type.
 * @param value The value to test.
 * @returns Returns `true` if the value is a primitive type, `false` otherwise.
 * @example
 *
 * try {
 *   console.log(isPrimitive("")) // true
 *   console.log(isPrimitive(0)) // true
 *   console.log(isPrimitive(false)) // true
 *   console.log(isPrimitive(null)) // true
 *   console.log(isPrimitive(undefined)) // true
 *   console.log(isPrimitive(Symbol())) // true
 *   console.log(isPrimitive({})) // false
 *   console.log(isPrimitive([])) // false
 * } catch (err) {
 *   console.error(err)
 * }
 */
const isPrimitive = (value: unknown): boolean => {
  return value !== Object(value)
}

export default isPrimitive
