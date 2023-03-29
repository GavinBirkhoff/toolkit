import isArray from './is-array-like'
import isNil from './is-nil'
/**
 * Determines whether an array or string contains a specified value.
 *
 * @param arr - The array or string to search through.
 * @param value - The value to search for.
 * @param position - Optional. The index to start searching from. Default is -1.
 * @returns A boolean indicating whether the value was found.
 *
 * @example
 *
 * ```typescript
 * const arr = [1, 2, 3, 4];
 * contains(arr, 3); // Returns true
 * contains('hello', 'w', 3); // Returns false
 * ```
 */
const contains = (arr: any[] | string, value: any, position = -1): boolean => {
  if (!isArray(arr) && typeof arr !== 'string') {
    return false
  }

  if (isNil(value)) {
    return false
  }

  return position < 0 ? arr.indexOf(value) > -1 : arr.indexOf(value, position) > -1
}

export default contains
