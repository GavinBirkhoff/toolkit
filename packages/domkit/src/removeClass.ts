/**
 * Remove a class from an element.
 *
 * @param el - The target element.
 * @param className - The class name to remove.
 *
 * @example
 * // Removes the class "active" from an element with the "target" ID.
 * const target = document.getElementById('target');
 * removeClass(target, 'active');
 */
const removeClass = (el: HTMLElement, className: string): void => {
  if (!el || !className) {
    return
  }

  if (el.classList && el.classList.remove) {
    el.classList.remove(className)
  } else {
    const reg = new RegExp(`(^|\\b)${className.split(' ').join('|')}($|\\b)`, 'gi')
    el.className = el.className.replace(reg, ' ')
  }
}

export default removeClass
