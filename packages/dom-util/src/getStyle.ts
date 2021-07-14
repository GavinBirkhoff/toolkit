interface XHTMLElement extends HTMLElement {
  currentStyle?: any
}
const getStyle = (el: XHTMLElement, style: any): string => {
  //IE: currentStyle
  //firefox: defaultView
  let value = el.style[style] || (el.currentStyle && el.currentStyle[style])

  if ((!value || value === 'auto') && document.defaultView) {
    const css = document.defaultView.getComputedStyle(el, null)
    value = css ? css[style] : null
  }

  return value === 'auto' ? null : value
}
