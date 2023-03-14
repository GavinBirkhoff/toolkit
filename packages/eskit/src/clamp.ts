/**
 * Put a num in a certain boundary
 * @param {number} num The value to clamp
 * @param {number} min The min bound
 * @param {number} max The max bound
 * @returns {number}
 * @since 1.0.0
 * @example
 * // returns -5
 * clamp(-10, -5, 5)
 * @example
 * // returns 5
 * clamp(10, -5, 5)
 */
const clamp = (num: number, min: number, max: number): number => {
  if (num < min) {
    return min
  } else if (num > max) {
    return max
  }
  return num
}
export default clamp
