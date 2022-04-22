/**
 * @description Creates a debounced function that delays invoking `func` until after `wait`
 * @param {Function} func The function to debounce
 * @param {Number} wait waiting time
 * @param {boolean} immediate Is it implemented immediately
 * @returns {Function}
 * @example
 * debounce(()=>{console.log},1000)
 */
const debounce = (func: () => void, wait = 0, immediate?: boolean): (() => void) => {
  let timer: NodeJS.Timeout | null
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const context = this
  return (...args) => {
    if (timer) clearTimeout(timer)
    if (immediate) {
      const callNow = !timer
      timer = setTimeout(() => {
        timer = null
      }, wait)
      if (callNow) func.apply(context, args)
    } else {
      timer = setTimeout(() => {
        func.apply(context, args)
      }, wait)
    }
  }
}

export default debounce
