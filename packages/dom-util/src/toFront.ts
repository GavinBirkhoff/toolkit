/**
 * @since 1.0.0
 * @description
 * @param {HTMLElement} el
 */
const toFront = (el: HTMLElement): void => {
  const parent = el.parentNode
  parent?.appendChild(el)
}

export default toFront
