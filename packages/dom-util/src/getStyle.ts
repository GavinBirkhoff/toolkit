interface XHTMLElement extends HTMLElement {
  currentStyle?: any
}
/**
 * @description get style from ele
 * @param {XHTMLElement} el
 * @param {any} style
 * @returns
 */
const getStyle = (el: XHTMLElement, style: any): string => {
  //IE: currentStyle
  //firefox: defaultView
  let value = el.style[style as any] || (el.currentStyle && el.currentStyle[style as any])

  if ((!value || value === 'auto') && document.defaultView) {
    const css = document.defaultView.getComputedStyle(el, null)
    value = css ? css[style as any] : null
  }

  return value === 'auto' ? null : value
}

export default getStyle
