import isArray from './is-array'

/**
 * Iterates over elements of collection and invokes func for each element.
 *
 * @param {T[] | Record<string, T>} collection - The collection to iterate over.
 * @param {(value: T, key: string | number, collection: Record<string, T> | T[]) => any} func - The function invoked per iteration.
 *
 * @example
 * each([1, 2, 3], (value, index, collection) => console.log(value, index));
 * each({ a: 1, b: 2, c: 3 }, (value, key, collection) => console.log(value, key));
 */
const each = <T>(
  collection: T[] | Record<string, T>,
  func: (value: T, key?: string | number, collection?: Record<string, T> | T[]) => any
): void => {
  if (!collection) {
    return
  }

  if (isArray(collection)) {
    collection.forEach((value, index) => {
      func(value, index, collection)
    })
  } else {
    const entries = Object.entries(collection)
    entries.forEach(([key, value]) => {
      func(value, key, collection)
    })
  }
}

export default each
