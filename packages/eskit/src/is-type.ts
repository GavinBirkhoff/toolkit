/**
 * Checks if a value's type matches the specified type string.
 * @param type - The type string to check against.
 * @param value - The value to check the type of.
 * @returns True if the value's type matches the specified type string, false otherwise.
 * @example
 * isType('String', 'hello'); // true
 * isType('Array', {}); // false
 */
const isType = (type: string, value: unknown): boolean => Object.prototype.toString.call(value) === `[object ${type}]`
export default isType
