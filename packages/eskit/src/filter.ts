/**
 * Filters the elements of an array or object based on a callback function.
 * @param collection The array or object to filter.
 * @param callback The function to call for each element. Should return `true` to keep the element, `false` to remove it.
 * @returns A new array or object containing only the elements for which the callback function returned `true`.
 * @example
 * // Define an array of numbers
 * const numbers = [1, 2, 3, 4, 5];
 *
 * // Define a callback function to filter even numbers
 * const isEven = (num: number) => num % 2 === 0;
 *
 * // Filter the array using the callback function
 * const evenNumbers = filter(numbers, isEven);
 *
 * // The new array contains only even numbers
 * console.log(evenNumbers); // [2, 4]
 *
 * // Define an object of key-value pairs
 * const obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
 *
 * // Define a callback function to filter even values
 * const isEvenValue = (val: number) => val % 2 === 0;
 *
 * // Filter the object using the callback function
 * const evenValuesObj = filter(obj, (_, value) => isEvenValue(value));
 *
 * // The new object contains only key-value pairs where the value is even
 * console.log(evenValuesObj); // { b: 2, d: 4 }
 */
const filter = <T extends Array<unknown> | Record<string, unknown>>(
  collection: T,
  callback: (
    value: T extends Array<infer U> ? U : T[keyof T],
    indexOrKey: T extends Array<unknown> ? number : keyof T,
    collection: T
  ) => boolean
): T => {
  const filteredCollection: T = Array.isArray(collection) ? ([] as any) : ({} as T)

  for (const [indexOrKey, value] of Object.entries(collection)) {
    if (callback(value as any, indexOrKey as any, collection)) {
      if (Array.isArray(filteredCollection)) {
        filteredCollection.push(value as any)
      } else {
        filteredCollection[indexOrKey as any] = value as any
      }
    }
  }

  return filteredCollection
}

export default filter
