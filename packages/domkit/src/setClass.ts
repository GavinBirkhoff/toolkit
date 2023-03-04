/**
 * @description Set class name, but overwrite the previous class name
 * @param {HTMLElement} el target dom
 * @param {string} name The value of class
 * @example
 * setClass(el, 'name')
 * setClass(el, 'name1 name2')
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
