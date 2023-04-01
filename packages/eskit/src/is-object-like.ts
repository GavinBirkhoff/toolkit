/**
 * Checks if a value is object-like, which means it's not null and its type is 'object'.
 * @param value The value to check.
 * @returns {boolean} True if the value is object-like, false otherwise.
 *
 * @example
 * isObjectLike({}); // true
 * isObjectLike([]); // true
 * isObjectLike(null); // false
 * isObjectLike(42); // false
 */

const isObjectLike = (value: unknown): boolean => {
  return value !== null && typeof value === 'object'
}

export default isObjectLike
