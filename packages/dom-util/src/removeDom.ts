const removeDom = (el: HTMLElement): boolean => {
  const parent = el.parentNode
  if (parent) {
    parent.removeChild(el)
    return true
  }
  return false
}
export default removeDom
