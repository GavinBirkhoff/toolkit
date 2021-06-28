export default (func: () => void, wait: number | undefined, immediate: any): (() => void) => {
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
