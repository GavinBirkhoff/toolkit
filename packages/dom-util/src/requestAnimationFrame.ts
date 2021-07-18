/**
 * Compatibility requestAnimationFrame function
 * @param {FrameRequestCallback} fn The function to requestAnimationFrame
 * @returns {Function}
 */
const requestAnimationFrame = (fn: FrameRequestCallback): any => {
  const method =
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    // @ts-ignore
    window.mozRequestAnimationFrame ||
    // @ts-ignore
    window.msRequestAnimationFrame ||
    function (f) {
      return setTimeout(f, 16)
    }

  return method(fn)
}
export default requestAnimationFrame
