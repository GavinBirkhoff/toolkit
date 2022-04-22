import getClass from './getClass'
/**
 * @description Check whether the element contains class name
 * @param {HTMLElement} el target dom
 * @param {String} name class name
 * @returns {boolean}
 */
const hasClass = (el: HTMLElement, name: string): boolean => {
  if (el.classList !== undefined) {
    return el.classList.contains(name)
  }
  const className = getClass(el)
  return className.length > 0 && new RegExp('(^|\\s)' + name + '(\\s|$)').test(className)
}

export default hasClass
