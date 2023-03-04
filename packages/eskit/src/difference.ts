import filter from './filter'
import contains from './contains'

/**
 * @description Find distinct items from arrays
 * @param {Array} arr one array
 * @param {Array} values one array
 * @example
 * difference([2, 1], [2, 3]);  // => [1]
 */
const difference = <T>(arr: T[], values: T[] = []): T[] => filter(arr, (value: any) => !contains(values, value))

export default difference
