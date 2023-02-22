import { throttle, debounce } from 'util4j'

interface EventOptions {
  useCapture?: boolean
  useThrottle?: boolean
  useDebounce?: boolean
  useOnce?: boolean
}
/**
 * @description Add event listener for target element
 * @param {HTMLElement | SVGElement} ele Target element
 * @param {string} type Type of event
 * @param {EventListenerOrEventListenerObject} eventHandle Response execution function
 * @param {EventOptions} options
 * @returns {Function} Returns function provide removeEvent to remove listener from element
 */
const addEvent = (
  ele: HTMLElement | SVGElement,
  type: string,
  eventHandle: EventListenerOrEventListenerObject,
  options?: EventOptions
): any => {
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
  return callBack
}

export default addEvent
