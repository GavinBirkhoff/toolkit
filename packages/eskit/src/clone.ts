/**
 * Create a clone of the given object.
 *
 * @param obj - The object to clone.
 * @returns The cloned object.
 *
 * @example
 * const obj = { a: 1, b: { c: 2 } };
 * const cloneObj = clone(obj);
 * console.log(cloneObj); // { a: 1, b: { c: 2 } }
 *
 * @since 1.0.0
 */
const clone = <T>(obj: T): T => {
  return JSON.parse(JSON.stringify(obj))
}

export default clone
