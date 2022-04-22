/**
 * @description setClass
 * @param {HTMLElement} el target dom
 * @param {String} name The value of class
 */
const setClass = (el: HTMLElement | SVGElement, name: string): void => {
  if (el.className.baseVal === undefined) {
    //@ts-ignore
    el.className = name
  } else {
    el.className.baseVal = name
  }
}
export default setClass
