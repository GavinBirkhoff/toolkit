import { isElement, isString } from '@gavinbirkhoff/util'
type DomAttrs = {
  tagName?: string
  container?: HTMLElement
  node?: HTMLElement | string
}
const createDom = (domAttrs: DomAttrs): HTMLElement => {
  const { tagName = 'div', container, node } = domAttrs
  const el = document.createElement(tagName)
  if (node) {
    if (isString(node)) {
      const textNode = document.createTextNode(node as string)
      el.appendChild(textNode)
    } else if (isElement(node)) {
      el.appendChild(node as Node)
    }
  }
  if (container) {
    container.appendChild(el)
  }
  return el
}

export default createDom
