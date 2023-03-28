/**
 * Removes all child nodes from the specified DOM element.
 *
 * @example
 * // clear the contents of a div with id "my-div"
 * const el = document.getElementById('my-div')
 * emptyDom(el)
 *
 * @param el The DOM element to empty.
 */
const emptyDom = (el: HTMLElement): void => {
  el.textContent = ''
}
export default emptyDom
