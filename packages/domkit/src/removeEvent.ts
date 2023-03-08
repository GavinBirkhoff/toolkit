/**
 * Remove event from target element
 * @param ele target element
 * @param type type of event
 * @param callBack listener callback
 * @param useCapture capture default false
 * @returns {void}
 * @since 1.0.0
 * @example
 * const callBack = addEvent(element, 'click', ()=>{})
 * removeEvent(element, 'click', callBack)
 */

const removeEvent = (ele: HTMLElement | SVGElement, type: string, callBack: any, useCapture = false): void => {
  if (!ele) return
  if (ele.removeEventListener) {
    ele.removeEventListener(type, callBack, useCapture)
    //@ts-ignore
  } else if (ele.detachEvent) {
    //@ts-ignore
    ele.detachEvent('on' + type, callBack)
  } else {
    //@ts-ignore
    ele['on' + type] = null
  }
}

export default removeEvent
