/**
 * Remove a DOM element.
 *
 * @param el - The element to remove.
 *
 * @example
 *
 * removeDom(document.getElementById('my-element'));
 *
 * @since 1.0.0
 */
const removeDom = (el: Element): void => {
  if (el && el.parentNode) {
    el.parentNode.removeChild(el)
  }
}
export default removeDom
