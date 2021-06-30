/**
 * clamp(-10, -5, 5)
 * // => -5
 *
 * clamp(10, -5, 5)
 * // => 5
 */
export default (a: number, min: number, max: number): number => {
  if (a < min) {
    return min
  } else if (a > max) {
    return max
  }
  return a
}
