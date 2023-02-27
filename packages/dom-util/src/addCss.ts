import { hasOwnProperty } from 'util4j'
import { StylePropsKeys } from './types'

const addCss = (
  selector: string,
  cssRules: Partial<{ [key in keyof StylePropsKeys]: number | string }>,
  title = 'sheet'
): void => {
  const styleSheets = Array.from(document.styleSheets)

  const head = document.head || document.getElementsByTagName('head')[0]

  let styleSheet = styleSheets.find((item: CSSStyleSheet) => item.title === title)
  if (!styleSheet) {
    const sty = document.createElement('style')
    sty.title = title
    head.appendChild(sty)
    //@ts-ignore
    if (!window.createPopup) {
      /* For Safari */
      head.appendChild(document.createTextNode(''))
    }
    // get new styleSheet
    styleSheet = document.styleSheets[document.styleSheets.length - 1]
  }

  let str = ''
  for (const prop in cssRules) {
    if (hasOwnProperty.call(cssRules, prop)) {
      str += `${prop.replace(/[A-Z]/g, function (value) {
        return '-' + value.toLowerCase()
      })}:${cssRules[prop as keyof StylePropsKeys]};`
    }
  }

  if (styleSheet.insertRule) {
    styleSheet.insertRule(`${selector}{${str}}`, styleSheet.cssRules.length)
  } else {
    styleSheet.addRule(selector, str, styleSheet.cssRules.length)
  }
}

export default addCss
