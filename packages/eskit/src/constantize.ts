/**
 * Freezes an object and recursively freezes its enumerable properties (but not their children).
 *
 * @param obj - The object to be frozen.
 * @since 1.0.0
 */
const constantize = <T extends Record<string, any>>(obj: T): void => {
  Object.freeze(obj)
  Object.keys(obj).forEach((key) => {
    const val = obj[key]
    if (typeof val === 'object' && val !== null) {
      Object.freeze(val)
    }
  })
}
export default constantize
