/**
 * Cancel animation frame
 * @param {Number} handler The return that requestAnimationFrame back
 * @since 1.0.0
 * @example
 * let animation = requestAnimationFrame(changeHeight)
 * setTimeout(() => clearAnimationFrame(animation), 3000)
 * @todo jest
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
