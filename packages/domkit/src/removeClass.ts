import setClass from './setClass'
import getClass from './getClass'
/**
 * remove class name
 * @param {HTMLElement} el target val
 * @param {String} name class name
 * @since 1.0.0
 */
const removeClass = (el: HTMLElement, name: string): void => {
  if (el.classList !== undefined) {
    el.classList.remove(name)
  } else {
    setClass(el, getClass(el).replace(' ' + name + ' ', ' '))
  }
}

export default removeClass
