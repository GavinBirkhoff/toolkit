interface RemOptions {
  maxWith?: number
  minWith?: number
  scale?: number
}
/**
 * Set font size of HTML tag according to the design width.
 *
 * @param designWidth - The design width of the page.
 * @param options - The optional parameters.
 *
 * @example
 * // Sets the HTML font size based on a design width of 750 pixels
 * // with a maximum width of 2000 pixels and a minimum width of 375 pixels.
 * rem(750, { maxWith: 2000, minWith: 375 });
 */
const rem = (designWidth: number, options: RemOptions = {}): void => {
  const { maxWith = 1680, minWith = 1024, scale = 100 } = options

  const changeHtmlSize = function () {
    const htmlTag = document.documentElement
    const { clientWidth } = htmlTag
    if (clientWidth === 0 || designWidth === 0) {
      return
    }

    const dpr = window.devicePixelRatio || 1
    const screenWidth = window.screen.availWidth * dpr
    const fontSize = `${(Math.max(Math.min(screenWidth, maxWith * dpr), minWith * dpr) / designWidth / dpr) * scale}px`
    htmlTag.style.fontSize = fontSize
    document.documentElement.style.setProperty('--html-font-size', fontSize)
    document.documentElement.style.setProperty('--dpr', dpr.toString())
  }

  const resizeEvent = 'orientationchange' in window ? 'orientationchange' : 'resize'
  let timer: number | null = null
  const handleWindowResize = () => {
    if (timer) {
      // 取消上一次未执行的任务
      window.cancelAnimationFrame(timer)
      timer = null
    }

    timer = window.requestAnimationFrame(changeHtmlSize)
  }

  handleWindowResize()
  window.addEventListener(resizeEvent, handleWindowResize, false)
  document.addEventListener('DOMContentLoaded', changeHtmlSize, false)
}

export default rem
