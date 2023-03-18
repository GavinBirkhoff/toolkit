/**
 * Division operation
 * @param {number} a Numerator
 * @param {number} b Denominator
 * @returns {number} Result
 * @since 1.0.0
 * @example
 * // returns 3
 * divide(0.3, 0.1)
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
