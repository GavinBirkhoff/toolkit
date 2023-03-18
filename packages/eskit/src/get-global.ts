/**
 * Get global this
 * @returns global this
 * @since 1.0.0
 * @example
 * getGlobal()
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
