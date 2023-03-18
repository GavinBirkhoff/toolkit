/**
 * Determine whether an object is of type Object
 * @param {*} value  Target value
 * @returns {boolean}  Is it of type Object
 * @since 1.0.0
 * @example
 * // returns true
 * isObject({})
 * @example
 * // returns true
 * isObject(()=>void)
 */
const isObject = (value: unknown): value is Record<string, unknown> => {
  const type = typeof value
  return (value !== null && type === 'object') || type === 'function'
}
export default isObject
