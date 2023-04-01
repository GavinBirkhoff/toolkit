import filter from './filter'
import contains from './contains'

/**
 * Returns an array of values in `arr` that are not in the `values` array.
 *
 * @typeparam T The type of the array elements.
 * @param arr The array to inspect.
 * @param values The values to exclude from the result.
 * @returns An array of values in `arr` that are not in the `values` array.
 *
 * @example
 * ```typescript
 * const arr = [1, 2, 3, 4, 5]
 * const values = [3, 4, 5, 6, 7]
 *
 * difference(arr, values) // Returns: [1, 2]
 * ```
 */
const difference = <T>(arr: T[], values: T[] = []): T[] => filter(arr, (value: any) => !contains(values, value))

export default difference
