import getClass from './getClass'
import setClass from './setClass'
/**
 * Adds one or more classes to an element's class attribute, excluding classes that already exist, including SVG elements.
 *
 * @param el - The element to add class names to
 * @param classes - One or more classes to add to the element, passing one or multiple class names in each argument
 *
 * @example
 * const el = document.querySelector('.example-class')!;
 * addClass(el, 'new-class-1', 'new-class-2', 'example-class');
 *
 * @since 1.0.0
 */
const addClass = (el: HTMLElement | SVGElement, ...classes: string[]): void => {
  const currentClassList = getClass(el).split(' ')
  const filteredClassNames = [...new Set(classes)].filter((className) => !currentClassList.includes(className))
  const newClassList = [...currentClassList, ...filteredClassNames]
  setClass(el, newClassList.join(' '))
}

export default addClass
