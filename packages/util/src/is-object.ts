/**
 * @description isObject
 * @param {any} value
 * @returns {boolean}
 */
const isObject = (value: unknown): value is Record<string, unknown> => {
  const type = typeof value
  return (value !== null && type === 'object') || type === 'function'
}
export default isObject
