/**
 * Throttle function
 * @param {Function} func function
 * @param wait Delay in milliseconds
 * @param type 1 time stamp, 2 timer
 * @since 1.0.0
 * @example
 * // returns throttleFn
 * throttle(fn, 200, 1)
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
// eslint-disable-next-line @typescript-eslint/ban-types
const throttle = (func: Function, wait: number, type: number): Function => {
  let previous = 0
  let timeout: NodeJS.Timeout | null

  return function () {
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const context = this
    // eslint-disable-next-line prefer-rest-params
    const args = arguments
    if (type === 1) {
      const now = Date.now()

      if (now - previous > wait) {
        func.apply(context, args)
        previous = now
      }
    } else if (type === 2) {
      if (!timeout) {
        timeout = setTimeout(() => {
          timeout = null
          func.apply(context, args)
        }, wait)
      }
    }
  }
}

export default throttle
