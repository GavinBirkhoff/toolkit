import filter from './filter'
import contains from './contains'

/**
 * Find distinct items from arrays
 * @param {Array} arr one array
 * @param {Array} values one array
 * @since 1.0.0
 * @example
 * // returns [1]
 * difference([2, 1], [2, 3]);  // => [1]
 */
const difference = <T>(arr: T[], values: T[] = []): T[] => filter(arr, (value: any) => !contains(values, value))

export default difference
