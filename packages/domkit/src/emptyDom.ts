/**
 * emptyDom
 * @param {HTMLElement} el Target element
 * @since 1.0.0
 * @example
 * emptyDom(dom)
 */
const emptyDom = (el: HTMLElement): void => {
  while (el.firstChild) {
    el.removeChild(el.firstChild)
  }
}
export default emptyDom
