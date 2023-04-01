import isNil from './is-nil'
/**
 * Converts a value to a string.
 *
 * @param value - The value to convert.
 * @returns The string representation of the value, or an empty string if the value is null or undefined.
 *
 * @example
 * ```
 * toString(123); // '123'
 * toString('hello'); // 'hello'
 * toString(null); // ''
 * ```
 */
const toString = (value: any): string => {
  if (isNil(value)) return ''
  return value.toString()
}

export default toString
