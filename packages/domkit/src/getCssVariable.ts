/**
 * Gets the value of a CSS variable on the specified element or the root element.
 * @param key - The name of the CSS variable to get.
 * @param ele - The element to get the CSS variable from. If not specified, defaults to the root element.
 * @returns The value of the CSS variable.
 * @example
 * // Get the value of a CSS variable on the root element
 * const bgColor = getCssVariable('--main-bg-color');
 *
 * // Get the value of a CSS variable on a specific element
 * const element = document.querySelector('.my-element');
 * const bgColor = getCssVariable('--main-bg-color', element);
 */
const getCssVariable = (key: string, ele?: HTMLElement): string => {
  const element = ele ?? document.documentElement
  const computedStyle = window.getComputedStyle(element)
  return computedStyle.getPropertyValue(key).trim()
}

export default getCssVariable
