import { throttle, debounce } from 'util4j'

interface EventOptions {
  useCapture?: boolean
  useThrottle?: boolean
  useDebounce?: boolean
  useOnce?: boolean
}

const addEvent = (
  ele: HTMLElement | SVGElement,
  type: string,
  eventHandle: EventListenerOrEventListenerObject,
  options?: EventOptions
): void => {
  if (!ele) return
  const { useCapture = false, useThrottle, useDebounce, useOnce } = options ?? {}

  let callBack: any = eventHandle
  if (useThrottle) {
    callBack = throttle(callBack as any, 300, 1)
  }
  if (useDebounce) {
    callBack = debounce(callBack as any)
  }
  if (ele.addEventListener) {
    if (useOnce) {
      ele.addEventListener(type, callBack, {
        once: useOnce,
        capture: useCapture
      })
    } else {
      // Capture is default
      ele.addEventListener(type, callBack, useCapture)
    }

    //@ts-ignore
  } else if (ele.attachEvent) {
    //@ts-ignore
    ele.attachEvent('on' + type, callBack)
  } else {
    //@ts-ignore
    ele['on' + type] = callBack
  }
}

export default addEvent
