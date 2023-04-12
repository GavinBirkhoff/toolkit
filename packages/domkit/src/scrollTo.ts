/**
 * Scroll to the specified position in the target element.
 *
 * @remarks
 * This function scrolls to the specified position in the target HTML element, which can be the window or any other HTML
 * element. If no target element is provided, it defaults to the window object.
 *
 * @param options - The options for the scroll operation.
 * @param options.x - The horizontal position to scroll to.
 * @param options.y - The vertical position to scroll to.
 * @param options.target - The target element to scroll. Defaults to the window object.
 * @param options.behavior - The scroll behavior. Can be "auto" (default) or "smooth".
 *
 * @example
 * ```typescript
 * import { scrollTo } from "./scrollTo";
 *
 * // Scroll to (0, 0) in the window object with smooth behavior
 * scrollTo({ x: 0, y: 0, behavior: "smooth" });
 *
 * // Scroll to (100, 100) in an HTML element with auto behavior
 * const element = document.getElementById("my-element");
 * scrollTo({ x: 100, y: 100, target: element });
 * ```
 */
type TargetType = HTMLElement | Element | Window
type ScrollToOptions = {
  x: number
  y: number
  target?: TargetType
  behavior?: 'auto' | 'smooth'
}

export const scrollTo = ({ x = 0, y = 0, target = window, behavior = 'auto' }: ScrollToOptions): void => {
  if (target instanceof Window) {
    // Use native window.scrollTo method
    if ('scrollBehavior' in document.documentElement.style && typeof window.scrollTo === 'function') {
      target.scrollTo({
        top: y,
        left: x,
        behavior
      })
    } else {
      target.scroll(x, y)
    }
  } else if (target instanceof HTMLElement) {
    // Use element.scrollTo method
    if (typeof target.scrollTo === 'function') {
      target.scrollTo({
        top: y,
        left: x,
        behavior
      })
    } else {
      target.scrollTop = y
      target.scrollLeft = x
    }
  } else {
    throw new Error('Invalid target element type. Must be Window or HTMLElement.')
  }
}

export default scrollTo
