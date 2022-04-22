/**
 * @description requestAnimationFrame
 * @param fn
 * @returns
 */
const requestAnimationFrame = (fn: FrameRequestCallback): number => {
  const method =
    window.requestAnimationFrame ||
    // @ts-ignore
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
