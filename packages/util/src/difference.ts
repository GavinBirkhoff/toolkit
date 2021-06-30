import filter from './filter'
import contains from './contains'

/**
 * difference([2, 1], [2, 3]);  // => [1]
 */
export default <T>(arr: T[], values: T[] = []): T[] => filter(arr, (value: any) => !contains(values, value))
