/**
 * Checks if the scroll has reached the end.
 * @param element - The element to check the scroll for. Defaults to the entire document.
 * @returns Returns a boolean indicating whether the scroll has reached the end.
 * @example
 * // Check if the entire document has scrolled to the end
 * const isDocumentScrollEnd = isScrollEnd();
 *
 * // Check if a specific div has scrolled to the end
 * const myDiv = document.getElementById('myDiv');
 * const isDivScrollEnd = isScrollEnd(myDiv);
 */
const isScrollEnd = (element?: HTMLElement): boolean => {
  const targetElement = element || document.documentElement
  const scrollTop = targetElement.scrollTop
  const scrollHeight = targetElement.scrollHeight
  const clientHeight = targetElement.clientHeight

  return scrollTop + clientHeight >= scrollHeight
}

export default isScrollEnd
