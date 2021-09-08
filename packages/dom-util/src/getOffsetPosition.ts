/**
 * getBoundingClientRect
 * @param {HTMLElement} ele
 * @returns {Object} { left: number; top: number }
 */
const getOffsetPosition = (ele: HTMLElement): { left: number; top: number } => {
  if (!ele) return { left: 0, top: 0 }
  let top = 0,
    left = 0
  if ('getBoundingClientRect' in document.documentElement) {
    const box = ele.getBoundingClientRect()
    const doc = ele.ownerDocument
    const body = doc.body
    const docElem = doc.documentElement
    const clientTop = docElem.clientTop || body.clientTop || 0
    const clientLeft = docElem.clientLeft || body.clientLeft || 0
    top = box.top + (self.pageYOffset || (docElem && docElem.scrollTop) || body.scrollTop) - clientTop
    left = box.left + (self.pageXOffset || (docElem && docElem.scrollLeft) || body.scrollLeft) - clientLeft
  } else {
    do {
      top += ele.offsetTop || 0
      left += ele.offsetLeft || 0
      ele = ele.offsetParent as unknown as HTMLElement
    } while (ele)
  }
  return { left, top }
}

export default getOffsetPosition
