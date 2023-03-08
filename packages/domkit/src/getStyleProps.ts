type StylePropsKeys = Omit<
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

type StyleProp = string | null
/**
 * Get style from XHTMLElement by key of CSSStyleDeclaration
 * @param {XHTMLElement} el target element
 * @param {keyof CSSStyleDeclaration} key key of CSSStyleDeclaration
 * @returns {string}
 * @since 1.0.0
 * @example
 * getStyleProps(dom, 'width')
 */
const getStyleProps = (el: XHTMLElement, key: keyof StylePropsKeys): StyleProp => {
  //IE: currentStyle
  //firefox: defaultView
  let value = el.style[key] || (el.currentStyle && el.currentStyle[key]) || null

  if ((!value || value === 'auto') && document.defaultView) {
    const style = document.defaultView.getComputedStyle(el, null)

    value = style ? style[key] : null
  }

  return value === 'auto' ? null : (value as StyleProp)
}

export default getStyleProps
