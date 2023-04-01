/**
 * Flattens an array.
 *
 * @typeparam T The type of the array elements.
 * @param array The array to flatten.
 * @returns The flattened array.
 *
 * @example
 * const arr = [1, [2, [3, 4]], 5];
 *
 * flatten(arr); // [1, 2, 3, 4, 5]
 */
const flatten = <T>(array: Array<T | T[]>): T[] => {
  const result: T[] = []

  while (array.length) {
    const item = array.shift()

    if (Array.isArray(item)) {
      array.unshift(...(item as T[]))
    } else {
      result.push(item as T)
    }
  }

  return result
}

export default flatten
