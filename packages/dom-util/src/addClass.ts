import getClass from './getClass'
import setClass from './setClass'
import hasClass from './hasClass'

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
