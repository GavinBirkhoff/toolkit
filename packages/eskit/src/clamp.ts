/**
 * Limits a number to be within a certain range.
 * @param {number} num The number to clamp.
 * @param {number} min The lower boundary of the range.
 * @param {number} max The upper boundary of the range.
 * @returns {number} The clamped number.
 * @since 1.0.0
 *
 * @example
 * // returns -5
 * clamp(-10, -5, 5)
 * // Returns -5
 * clamp(-10, -5, 5);
 *
 * @example
 * // returns 5
 * clamp(10, -5, 5)
 * // Returns 5
 * clamp(10, -5, 5);
 */
const clamp = (num: number, min: number, max: number): number => {
  return num < min ? min : num > max ? max : num
}
export default clamp
