/**
 * Returns the global object for the current runtime environment.
 *
 * This function returns the global object for the current runtime environment. It works in both browser and Node.js environments.
 *
 * @returns The global object for the current runtime environment.
 *
 * @throws An error if the global object cannot be located.
 *
 * @example
 * ```
 * const globalObj = getGlobal()
 *
 * if (typeof globalObj.process === 'object') {
 *   console.log('Running in Node.js')
 * } else {
 *   console.log('Running in browser')
 * }
 * ```
 */
const getGlobal = (): unknown => {
  if (typeof self !== 'undefined') {
    return self
  }
  if (typeof window !== 'undefined') {
    return window
  }
  if (typeof global !== 'undefined') {
    return global
  }
  throw new Error('unable to locate global object')
}

export default getGlobal
