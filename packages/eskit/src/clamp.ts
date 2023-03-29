/**
 * Limits a number to be within a certain range.
 *
 * @param num - The number to clamp.
 * @param min - The lower boundary of the range.
 * @param max - The upper boundary of the range.
 * @returns The clamped number.
 * @since 1.0.0
 *
 * @example
 * ```typescript
 * // returns -5
 * clamp(-10, -5, 5);
 * ```
 *
 * @example
 * ```typescript
 * // returns 5
 * clamp(10, -5, 5);
 * ```
 */
const clamp = (num: number, min: number, max: number): number => {
  return num < min ? min : num > max ? max : num
}
export default clamp
