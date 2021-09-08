/**
 * getClass
 * @param {HTMLElement} el
 * @returns {String}
 */
const getClass = (el: HTMLElement | SVGElement): string => {
  return el.className.baseVal === undefined ? el.className : el.className.baseVal
}

export default getClass
