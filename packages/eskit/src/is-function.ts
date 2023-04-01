import isType from './is-type'
/**
 * Checks if a given value is a function
 * @param value The value to check
 * @returns True if the value is a function, false otherwise
 * @example
 * isFunction(() => {}) // true
 * isFunction(function() {}) // true
 * isFunction(42) // false
 */
const isFunction = (value: unknown): value is () => void => {
  return isType('Function', value)
}

export default isFunction
