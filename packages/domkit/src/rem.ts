interface RemOptions {
  maxWith?: number
  minWith?: number
  scale?: number
}
/**
 * Set html fontSize for rem
 * @param {number} designWidth
 * @param {RemOptions} options
 * @returns {void}
 * @since 1.0.0
 * @example
 * rem(1200, { scale: 100 })
 */
const rem = (designWidth: number, options: RemOptions = {}): void => {
  const { maxWith = 1680, minWith = 1024, scale = 100 } = options
  const changeHtmlSize = function () {
    const htmlTag = document.documentElement
    const { clientWidth } = htmlTag
    const fontSize = `${(Math.max(Math.min(clientWidth, maxWith), minWith) / designWidth) * scale}px`
    htmlTag.style.fontSize = fontSize
    document.documentElement.style.setProperty('--html-font-size', fontSize)
    const dpr = window.devicePixelRatio || 1
    document.documentElement.style.setProperty('--dpr', dpr.toString())
  }
  const resizeEvent = 'orientationchange' in window ? 'orientationchange' : 'resize'
  window.addEventListener(resizeEvent, changeHtmlSize, false)
  document.addEventListener('DOMContentLoaded', changeHtmlSize, false)
}

export default rem
