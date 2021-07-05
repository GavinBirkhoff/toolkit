/**
 *
 * isNil(null)
 * // => true
 *
 * isNil(void 0)
 * // => true
 *
 * isNil(NaN)
 * // => false
 */
export default (value: any): value is null | undefined => value === null || value === undefined
