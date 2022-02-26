/**
 * @description
 * @param o
 * @returns
 */
const isElement = (o: any): boolean => o instanceof Element || o instanceof HTMLDocument
export default isElement
