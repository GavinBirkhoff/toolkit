/**
 * Add ele to front
 * @param {HTMLElement} el
 * @since 1.0.0
 */
const toFront = (el: HTMLElement): void => {
  const parent = el.parentNode
  parent?.appendChild(el)
}

export default toFront
