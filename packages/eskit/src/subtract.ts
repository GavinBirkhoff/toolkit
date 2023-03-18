/**
 * Subtraction operation
 * @param {number} a
 * @param {number} b
 * @returns {number}
 * @since 1.0.0
 * @example
 * // returns 0.2
 * subtract(0.3, 0.1)
 */
const subtract = (a: number, b: number): number => {
  let r1, r2
  try {
    r1 = a.toString().split('.')[1].length
  } catch (e) {
    r1 = 0
  }
  try {
    r2 = b.toString().split('.')[1].length
  } catch (e) {
    r2 = 0
  }
  const m = Math.pow(10, Math.max(r1, r2))
  const n = r1 >= r2 ? r1 : r2
  return Number(((a * m - b * m) / m).toFixed(n))
}

export default subtract
