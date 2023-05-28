/**
 * Get the horizontal scroll position.
 * @param element Scroll container element or window object.
 * @returns The horizontal scroll position.
 *
 * @example
 * // Get the horizontal scroll position of the window.
 * const windowScrollLeft = getScrollLeft(window);
 *
 * // Get the horizontal scroll position of a specific scroll container element.
 * const containerElement = document.getElementById('container');
 * const containerScrollLeft = getScrollLeft(containerElement);
 */
const getScrollLeft = (element: HTMLElement | Window): number => {
  if (typeof (element as HTMLElement).scrollLeft !== 'undefined') {
    return (element as HTMLElement).scrollLeft
  } else {
    return window.scrollX || window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
  }
}

export default getScrollLeft
