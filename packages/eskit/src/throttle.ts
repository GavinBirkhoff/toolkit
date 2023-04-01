/**
 * Creates a throttled function that only invokes the original function at most once per every `delay` milliseconds.
 * The throttled function has optional leading or trailing invocation.
 *
 * @param fn - The original function to be throttled.
 * @param delay - The number of milliseconds to throttle.
 * @param options - Optional configuration for leading and/or trailing invocation.
 * @param options.leading - Specify invoking the original function on the leading edge of the throttle. Default is `false`.
 * @param options.trailing - Specify invoking the original function on the trailing edge of the throttle. Default is `true`.
 * @returns - Throttled function that delays invoking the original function
 * at most once per every `delay` milliseconds.
 *
 * @example
 * const throttledFn = throttle((x, y) => {
 *   console.log(x + y);
 * }, 1000, { leading: true });
 *
 * throttledFn(1, 2); // logs 3 immediately
 * throttledFn(3, 4); // not invoked
 * setTimeout(() => throttledFn(5, 6), 2000); // logs 11 after 2 seconds
 *
 */
const throttle = <TArgs extends any[]>(
  fn: (...args: TArgs) => void,
  delay: number,
  options?: {
    leading?: boolean
    trailing?: boolean
  }
): ((...args: TArgs) => void) => {
  let timerId: ReturnType<typeof setTimeout> | null = null
  let lastInvokeTime = 0

  const shouldInvokeLeading = options?.leading === true
  const shouldInvokeTrailing = options?.trailing !== false

  return (...args: TArgs) => {
    const now = Date.now()
    const timeSinceLastInvoke = now - lastInvokeTime

    if (shouldInvokeLeading && timeSinceLastInvoke >= delay) {
      lastInvokeTime = now
      fn(...args)
    } else {
      if (shouldInvokeTrailing) {
        if (timerId !== null) {
          clearTimeout(timerId)
        }
        timerId = setTimeout(() => {
          lastInvokeTime = Date.now()
          fn(...args)
        }, delay - timeSinceLastInvoke)
      }
    }
  }
}

export default throttle
