/**
 * Randomly shuffle an array in place.
 *
 * @remarks
 * This function modifies the original array and does not return a new array.
 *
 * @param arr - The array to shuffle.
 *
 * @example
 * ```typescript
 * const arr = [1, 2, 3, 4, 5];
 * shuffle(arr);
 * console.log(arr); // Output: [3, 2, 5, 1, 4] (random order)
 * ```
 */
const shuffle = <T>(arr: T[]): void => {
  arr.sort(() => 0.5 - Math.random())
}

export default shuffle
