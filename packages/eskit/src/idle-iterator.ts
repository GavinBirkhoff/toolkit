/**
 * Traverses an array and calls a callbackfn on each item, only executing when the browser is idle.
 * @param array The array to iterate over.
 * @param callbackfn The function to execute on each item. It is passed the item and its index as arguments.
 *
 * @example
 *
 * ```typescript
 * const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 *
 * idleIterator(arr, (item, index) => {
 *   console.log(`Index ${index} with item ${item}`);
 * });
 * ```
 */
const idleIterator = <T>(array: T[], callbackfn: (item: T, index: number) => void): void => {
  let index = 0
  const iterator = () => {
    const start = Date.now()
    while (index < array.length && Date.now() - start < 16) {
      callbackfn(array[index], index)
      index++
    }
    if (index >= array.length) return
    requestIdleCallback(iterator)
  }
  requestIdleCallback(iterator)
}

export default idleIterator
