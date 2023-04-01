/**
 * Type guard to determine if a value is null or undefined.
 *
 * @param value - The value to test.
 *
 * @returns Whether or not the value is null or undefined.
 *
 * @example
 *
 * ```typescript
 * isNil(null); // true
 * isNil(undefined); // true
 * isNil(''); // false
 * isNil(0); // false
 * ```
 */
const isNil = (value: unknown): value is null | undefined => value === null || value === undefined
export default isNil
