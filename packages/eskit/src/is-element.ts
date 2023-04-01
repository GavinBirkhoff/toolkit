/**
 * Checks if a value is an Element or HTMLDocument object.
 *
 * @param o - The value to check.
 * @returns `true` if the value is an Element or HTMLDocument object, else `false`.
 *
 * @example
 * ```
 * isElement(document.body) // => true
 * isElement(document.querySelector('.my-class')) // => true
 * isElement(window) // => false
 * isElement('not an element') // => false
 * ```
 */
const isElement = (o: unknown): boolean => o instanceof Element || o instanceof HTMLDocument
export default isElement
