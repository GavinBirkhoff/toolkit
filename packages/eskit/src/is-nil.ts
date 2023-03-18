/**
 * Determine whether an object is of type Nil
 * @param {*} value Target value
 * @returns {boolean}  Is it of type Nil
 * @since 1.0.0
 * @example
 * // returns true
 * isNil(null)
 * @example
 * // returns true
 * isNil(void 0)
 * @example
 * // returns false
 * isNil(NaN)
 */
const isNil = (value: unknown): value is null | undefined => value === null || value === undefined
export default isNil
