/**
 * Determine whether an object is of type PromiseLike
 * @param {*} obj Accept an type
 * @returns {boolean}
 */
// Promises/A+ https://promisesaplus.com/
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
const isPromiseLike = (obj: any): boolean =>
  obj !== null && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function'

export default isPromiseLike
