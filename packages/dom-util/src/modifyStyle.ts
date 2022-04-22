/**
 * @description modifyStyle
 * @param {HTMLElement} dom
 * @param {Object} style
 * @returns {HTMLElement} dom
 */
const modifyStyle = (dom: HTMLElement, style: { [key: string]: unknown }): HTMLElement => {
  if (dom) {
    for (const key in style) {
      if (Object.prototype.hasOwnProperty.call(style, key)) {
        ;(dom.style as any)[key] = style[key]
      }
    }
  }
  return dom
}

export default modifyStyle
