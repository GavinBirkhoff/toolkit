type MemoizeFn = (...args: any[]) => any
/**
 * Memoizes the result of a function for the same set of arguments.
 * @param fn The function to be memoized.
 * @returns The memoized function.
 * @example
 * function expensiveOperation(arg1: string, arg2: number): number {
 *   // ...some expensive operation here...
 * }
 *
 * const memoizedOperation = memoize(expensiveOperation);
 *
 * const result1 = memoizedOperation('foo', 42); // Expensive operation is called.
 * const result2 = memoizedOperation('foo', 42); // Expensive operation is not called.
 * const result3 = memoizedOperation('bar', 42); // Expensive operation is called again.
 */
const memoize = <T extends MemoizeFn>(fn: T): T => {
  const cache = new Map<string, ReturnType<T>>()

  return ((...args: any[]) => {
    const key = JSON.stringify(args)
    if (cache.has(key)) {
      return cache.get(key)
    }
    const result = fn(...args)
    cache.set(key, result)
    return result
  }) as T
}

export default memoize
