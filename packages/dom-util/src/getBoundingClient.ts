/**
 * @description get bounding of client
 * @param {HTMLElement} ele
 * @returns {{ x: number; y: number } | undefined}
 */
const getBoundingClient = (ele: HTMLElement): { x: number; y: number } | undefined => {
  if (!ele) return
  let top = ele.offsetTop
  let left = ele.offsetLeft

  while ((ele = ele.offsetParent as HTMLElement)) {
    top += ele.offsetTop
    left += ele.offsetLeft
  }
  return { x: left, y: top }
}

export default getBoundingClient
