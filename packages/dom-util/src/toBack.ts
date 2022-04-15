/**
 * @since 1.0.0
 * @description
 * @param {HTMLElement} el
 */
const toBack = (el: HTMLElement): void => {
  const parent = el.parentNode
  //insertBefore：insertBefore(newchild,refchild)
  parent?.insertBefore(el, parent.firstChild)
}

export default toBack
