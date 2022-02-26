/**
 * @description
 * @param value
 * @returns
 * @example
 * isNil(null)
 * // => true
 *
 * isNil(void 0)
 * // => true
 *
 * isNil(NaN)
 * // => false
 */
const isNil = (value: any): value is null | undefined => value === null || value === undefined
export default isNil
