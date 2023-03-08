/**
 * ModifyStyle
 * @param {HTMLElement} dom
 * @param {Object} style
 * @returns {HTMLElement} dom
 * @since 1.0.0
 * @deprecated
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
