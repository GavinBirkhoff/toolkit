/**
 * Returns a boolean indicating if the current environment is a browser environment.
 */
const canUseDom = (): boolean =>
  typeof window !== 'undefined' && typeof document !== 'undefined' && typeof document.createElement === 'function'

export default canUseDom
