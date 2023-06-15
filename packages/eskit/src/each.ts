import isArray from './is-array'
import isString from './is-string'
export type Collection<V, K extends string | number = number> = V | V[] | Set<V> | Record<K, V> | Map<K, V>
/**
 * Iterates over a collection and applies a function to each element.
 *
 * @typeParam V - The type of values in the collection.
 * @typeParam K - The type of keys in the collection.
 * @param collection - The collection to iterate over.
 * @param callbackfn - The function to apply to each element.
 * @returns Returns `true` if all iterations pass, or `false` if any iteration returns `false`.
 *
 * @example
 * // Example usage with an array
 * const arr = [1, 2, 3];
 * each(arr, (value, index) => {
 *   console.log(value); // Output: 1, 2, 3
 *   console.log(index); // Output: 0, 1, 2
 * });
 *
 * // Example usage with an object
 * const obj = { a: 1, b: 2, c: 3 };
 * each(obj, (value, key) => {
 *   console.log(value); // Output: 1, 2, 3
 *   console.log(key); // Output: 'a', 'b', 'c'
 * });
 *
 * // Example usage with a Map
 * const map = new Map<number, string>([[1, 'one'], [2, 'two'], [3, 'three']]);
 * each(map, (value, key) => {
 *   console.log(value); // Output: 'one', 'two', 'three'
 *   console.log(key); // Output: 1, 2, 3
 * });
 */
const each = <V, K extends string | number = number>(
  collection: Collection<V, K>,
  callbackfn: (value: V, key: K, collection: Collection<V, K>) => boolean | undefined | void
): boolean => {
  if (!collection) {
    return false
  }

  if (isArray(collection) || isString(collection) || collection instanceof Set) {
    let i = 0
    for (const item of collection) {
      const re = callbackfn(item as V, i as K, collection)
      i++
      if (re === false) return false
    }
  } else if (collection instanceof Map) {
    for (const [key, value] of collection) {
      const re = callbackfn(value, key, collection)
      if (re === false) return false
    }
  } else {
    const entries = Object.entries<V>(collection)
    for (const [key, value] of entries) {
      const re = callbackfn(value, key as K, collection)
      if (re === false) return false
    }
  }
  return true
}

export default each
