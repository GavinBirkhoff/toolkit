/**
 * Checks if a given object is promise-like (thenable).
 * @param obj The object to check.
 * @returns Whether the object is promise-like.
 * @example
 * const myPromise = new Promise(resolve => setTimeout(() => resolve('done'), 100));
 * console.log(isPromiseLike(myPromise)); // true
 * console.log(isPromiseLike({ then: () => {} })); // true
 * console.log(isPromiseLike({})); // false
 */
const isPromiseLike = (obj: any): boolean =>
  obj !== null && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function'

// Promises/A+ https://promisesaplus.com/
export default isPromiseLike
