/**
 * Divides two numbers and returns the quotient.
 *
 * @param {number} a The dividend.
 * @param {number} b The divisor.
 * @returns {number} The quotient.
 *
 * @example
 * // Returns 2
 * divide(4, 2);
 *
 * @example
 * // Returns 2.5
 * divide(5, 2);
 */
const divide = (a: number, b: number): number => {
  let t1, t2
  try {
    t1 = a.toString().split('.')[1].length
  } catch (e) {
    t1 = 0
  }
  try {
    t2 = b.toString().split('.')[1].length
  } catch (e) {
    t2 = 0
  }
  const r1 = Number(a.toString().replace('.', ''))
  const r2 = Number(b.toString().replace('.', ''))
  return (r1 / r2) * Math.pow(10, t2 - t1)
}

export default divide
