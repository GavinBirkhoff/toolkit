type DebouncedFn = {
  (...args: any[]): void
  cancel: () => void
}

/**
 * Creates a debounced function that waits for the specified delay after the last call before executing.
 *
 * @param fn The function to wrap.
 * @param delay The delay time (in milliseconds) before the function is executed.
 * @param immediate Whether to execute the function immediately on the first call.
 * @returns The wrapped debounced function.
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
