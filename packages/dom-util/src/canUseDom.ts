/**
 * @description Know wether we can use dom.
 * @returns {boolean}
 * @example
 * canUseDom() => boolean
 */
const canUseDom = (): boolean => !!(typeof window !== 'undefined' && window.document && window.document.createElement)

export default canUseDom
