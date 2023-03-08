/**
 * removeDom
 * @param {HTMLElement} el
 * @returns {boolean}
 * @since 1.0.0
 * @example
 * removeDom(dom)
 */
const removeDom = (el: HTMLElement): boolean => {
  const parent = el.parentNode
  if (parent) {
    parent.removeChild(el)
    return true
  }
  return false
}
export default removeDom
