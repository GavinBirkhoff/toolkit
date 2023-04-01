/**
 * Check if a value is an object.
 *
 * @param value - The value to check.
 *
 * @returns `true` if the value is an object, else `false`.
 *
 * @example
 * isObject({}) // true
 * isObject([]) // true
 * isObject(null) // false
 */
const isObject = (value: unknown): value is Record<string, unknown> => {
  return typeof value === 'object' && value !== null
}

export default isObject
