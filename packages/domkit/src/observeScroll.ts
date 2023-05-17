/**
 * Observes the scroll event on the specified element and triggers the provided callbacks.
 * @param element - The element to observe scroll events on.
 * @param onScroll - The callback function to execute when a scroll event occurs.
 * @param onScrollStop - The optional callback function to execute when scrolling stops.
 * @returns A function to stop observing scroll events.
 *
 * @example
 * // Start observing scroll events on the element
 * const stopObserving = observeScroll(myElement, handleScroll, handleScrollStop);
 *
 * // Stop observing scroll events
 * stopObserving();
 */
const observeScroll = (
  element: HTMLElement,
  onScroll: (event?: Event) => void,
  onScrollStop?: () => void
): (() => void) => {
  let isScrolling = false

  const scrollHandler = (event: Event) => {
    if (!isScrolling) {
      isScrolling = true
      requestAnimationFrame(checkScrollStop)
      onScroll(event)
    }
  }

  const checkScrollStop = () => {
    isScrolling = false
    onScrollStop?.()
  }

  element.addEventListener('scroll', scrollHandler)

  return () => {
    element.removeEventListener('scroll', scrollHandler)
  }
}

export default observeScroll
