import isType from './is-type'
/**
 * Determines whether the given value is an instance of `Error`.
 *
 * @param value - The value to check.
 * @returns Whether the given value is an instance of `Error`.
 *
 * @example
 * const err = new Error('Example error');
 * isError(err); // true
 *
 * const obj = { error: new Error('Example error') };
 * isError(obj.error); // true
 *
 * isError('Error'); // false
 */
const isError = (value: unknown): value is Error => {
  return isType('Error', value)
}

export default isError
