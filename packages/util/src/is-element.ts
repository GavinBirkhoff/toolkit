/**
 * @description isElement
 * @param {any} o
 * @returns {boolean}
 */
const isElement = (o: any): boolean => o instanceof Element || o instanceof HTMLDocument
export default isElement
