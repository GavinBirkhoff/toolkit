type StylePropsKey = Omit<
  CSSStyleDeclaration,
  | 'getPropertyPriority'
  | 'getPropertyValue'
  | 'item'
  | 'removeProperty'
  | 'setProperty'
  | 'parentRule'
  | 'length'
  | number
>
interface XHTMLElement extends HTMLElement {
  currentStyle?: CSSStyleDeclaration
}
/**
 * @description Get style from XHTMLElement by key of CSSStyleDeclaration
 * @param {XHTMLElement} el target element
 * @param {keyof CSSStyleDeclaration} key key of CSSStyleDeclaration
 * @returns {string}
 */
const getStyleProps = (el: XHTMLElement, key: keyof StylePropsKey): string | null => {
  //IE: currentStyle
  //firefox: defaultView
  let value = el.style[key] || (el.currentStyle && el.currentStyle[key]) || null

  if ((!value || value === 'auto') && document.defaultView) {
    const style = document.defaultView.getComputedStyle(el, null)

    value = style ? style[key] : null
  }

  return value === 'auto' ? null : value
}

export default getStyleProps
