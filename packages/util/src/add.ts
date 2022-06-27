/**
 * @since 1.0.0
 * @description Add two numbers
 * @param {Number} a
 * @param {Number} b
 * @returns {Number}
 */
const add = (a: number, b: number): number => {
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
  return (a * m + b * m) / m
}

export default add
