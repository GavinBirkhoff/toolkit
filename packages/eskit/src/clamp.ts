/**
 * @since 1.0.0
 * @description Put a num in a certain boundary
 * @param {Number} num The value to clamp
 * @param {Number} min The min bound
 * @param {Number} max The max bound
 * @returns {Number}
 * @example
 * clamp(-10, -5, 5)
 * // -5
 *
 * clamp(10, -5, 5)
 * // 5
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
