/**
 * @description setOpacity
 * @param {HTMLElement} el target dom
 * @param {number} value setOpacity of value
 */
const setOpacity = (el: HTMLElement, value: number): void => {
  if ('opacity' in el.style) {
    el.style.opacity = value as unknown as string
  } else if ('filter' in el.style) {
    // @ts-ignore
    el.style.filter = 'alpha(opacity:' + value * 100 + ')'
  }
}

export default setOpacity
