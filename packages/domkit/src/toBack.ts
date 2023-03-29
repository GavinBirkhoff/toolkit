/**
 * Moves the given element to the back of its parent's children.
 *
 * @param el - The element to move to the back.
 * @example
 *
 * // Move the first div to the back of its parent container
 * const container = document.querySelector('.container');
 * const firstDiv = container.firstElementChild;
 * toBack(firstDiv);
 */
const toBack = (el: HTMLElement): void => {
  const parent = el.parentNode
  parent?.appendChild(el)
}

export default toBack
