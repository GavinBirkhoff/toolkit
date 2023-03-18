/**
 * Determine whether an object is of type Element
 * @param {*} o Target value
 * @returns {boolean}  Is it of type Element
 * @since 1.0.0
 * @example
 * //return true
 * isElement(dom)
 */
const isElement = (o: unknown): boolean => o instanceof Element || o instanceof HTMLDocument
export default isElement
