import getClass from './getClass'
import setClass from './setClass'
import hasClass from './hasClass'
/**
 * @description Add class name
 * @param  {HTMLElement} el target
 * @param  {string} name class name
 * @example
 * addClass(el,'name')
 * addClass(el,'name1 name2 name3')
 */
const addClass = (el: HTMLElement, name: string): void => {
  if (el.classList !== undefined) {
    const cloneName = name
    const classes = cloneName.replace(/\s+/g, ' ').split(' ')
    for (let i = 0, len = classes.length; i < len; i++) {
      el.classList.add(classes[i])
    }
  } else if (!hasClass(el, name)) {
    const className = getClass(el)
    setClass(el, (className ? className + ' ' : '') + name)
  }
}

export default addClass
