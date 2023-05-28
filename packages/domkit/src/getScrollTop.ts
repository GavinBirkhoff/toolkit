/**
 * Get the scroll position.
 * @param element Scroll container element or window object.
 * @returns The scroll position.
 *
 * @example
 * // Get the scroll position of the window.
 * const windowScrollTop = getScrollTop(window);
 *
 * // Get the scroll position of a specific scroll container element.
 * const containerElement = document.getElementById('container');
 * const containerScrollTop = getScrollTop(containerElement);
 */
const getScrollTop = (element: HTMLElement | Window): number => {
  if (typeof (element as HTMLElement).scrollTop !== 'undefined') {
    return (element as HTMLElement).scrollTop
  } else {
    return window.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
  }
}

export default getScrollTop
