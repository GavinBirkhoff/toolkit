/**
 * Know wether we can use dom.
 * @returns {boolean}
 * @since 1.0.0
 * @example
 * canUseDom() => boolean
 */
const canUseDom = (): boolean => !!(typeof window !== 'undefined' && window.document && window.document.createElement)

export default canUseDom
