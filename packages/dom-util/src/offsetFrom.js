export default function offsetFrom(ele) {
  let top = ele.offsetTop
  let left = ele.offsetLeft

  while ((ele = ele.offsetParent)) {
    top += ele.offsetTop
    left += ele.offsetLeft
  }
  return { x: left, y: top }
}
