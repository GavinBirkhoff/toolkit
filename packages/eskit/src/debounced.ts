/**
 * The type of a function that has been debounced.
 *
 * @typedef {{
 *   (...args: any[]): void,
 *   cancel: () => void
 * }} DebouncedFn
 */
type DebouncedFn = {
  (...args: any[]): void
  cancel: () => void
}

/**
 * Creates a debounced function that waits for the specified delay after the last call before executing.
 *
 * @template Args The type of the function arguments list.
 * @param {Function} fn= The function to wrap.
 * @param {number} delay The delay time (in milliseconds) before the function is executed.
 * @param {boolean} [immediate=false] Whether to execute the function immediately on the first call.
 * @returns {DebouncedFn} The wrapped debounced function.
 */
const debounced = <Args extends any[]>(
  fn: (...args: Args) => void,
  delay: number,
  immediate?: boolean
): DebouncedFn => {
  let timeout: ReturnType<typeof setTimeout> | null = null

  const debouncedFn = (...args: Args) => {
    const later = () => {
      timeout = null
      if (!immediate) fn(...args)
    }

    const shouldCallNow = immediate && timeout === null

    if (timeout !== null) clearTimeout(timeout)
    timeout = setTimeout(later, delay)

    if (shouldCallNow) fn(...args)
  }

  /**
   * Cancels the debouncing, so that the debounced function no longer waits and does not execute.
   */
  debouncedFn.cancel = () => {
    if (timeout !== null) {
      clearTimeout(timeout)
      timeout = null
    }
  }

  return debouncedFn as DebouncedFn
}

export default debounced
