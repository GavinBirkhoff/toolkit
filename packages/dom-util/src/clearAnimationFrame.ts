/**
 * @description cancel animation frame
 * @param {Number} handler
 */
const cancelAnimationFrame = (handler: number): void => {
  const method =
    window.cancelAnimationFrame ||
    // @ts-ignore
    window.webkitCancelAnimationFrame ||
    // @ts-ignore
    window.mozCancelAnimationFrame ||
    // @ts-ignore
    window.msCancelAnimationFrame ||
    clearTimeout

  method(handler)
}

export default cancelAnimationFrame
