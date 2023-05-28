import getScrollLeft from './getScrollLeft'
import getScrollTop from './getScrollTop'

interface ClientXY {
  x: number
  y: number
}

/**
 * Gets the client (x, y) coordinates of the specified element relative to the viewport.
 *
 * @example
 * // get the bounding client of the element with id "my-ele"
 * const el = document.getElementById('my-ele')
 * const bounds = getBoundingClientPosition(el)
 * console.log(bounds.x, bounds.y)
 *
 * @param ele The element to get the bounding client for.
 * @returns The client (x, y) coordinates of the element.
 */
const getBoundingClientPosition = (ele: HTMLElement): ClientXY => {
  if (!ele) return { x: 0, y: 0 }
  const domRect = ele.getBoundingClientRect()
  const matrix = window?.visualViewport?.scale || 1 // use visual viewport scaling if available
  return {
    x: (domRect.x ?? domRect.left) * matrix + getScrollLeft(ele),
    y: (domRect.y ?? domRect.top) * matrix + getScrollTop(ele)
  }
}

export default getBoundingClientPosition
