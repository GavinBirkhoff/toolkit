/**
 * Returns the result of subtracting the second number from the first number.
 * @param a - The first number to subtract.
 * @param b - The second number to subtract from the first number.
 * @returns The result of subtracting the second number from the first number.
 * @example
 * ```typescript
 * subtract(3, 1); // 2
 * ```
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
