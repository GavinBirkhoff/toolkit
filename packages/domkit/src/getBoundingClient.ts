/**
 * Get bounding of client
 * @param {HTMLElement} ele
 * @returns {ClientXY}
 * @since 1.0.0
 * @example
 * getBoundingClient(dom)
 */
interface ClientXY {
  x: number
  y: number
}
const getBoundingClient = (ele: HTMLElement): ClientXY => {
  if (!ele) return { x: 0, y: 0 }
  if (ele.getBoundingClientRect) {
    const domRect = ele.getBoundingClientRect()
    return {
      x: domRect.x ?? domRect.left,
      y: domRect.y ?? domRect.top
    }
  }
  let top = ele.offsetTop
  let left = ele.offsetLeft

  while ((ele = ele.offsetParent as HTMLElement)) {
    top += ele.offsetTop
    left += ele.offsetLeft
  }
  return { x: left, y: top }
}

export default getBoundingClient
