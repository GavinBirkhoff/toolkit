/**
 * Multiply two numbers accurately.
 * @param a - The first number to multiply.
 * @param b - The second number to multiply.
 * @returns The result of the multiplication.
 * @example
 * const result = multiply(2.3, 4.5);
 * console.log(result); // Output: 10.35
 */
const multiply = (a: number, b: number): number => {
  let m = 0
  const s1 = a.toString()
  const s2 = b.toString()
  try {
    m += s1.split('.')[1].length
    // eslint-disable-next-line no-empty
  } catch (e) {}
  try {
    m += s2.split('.')[1].length
    // eslint-disable-next-line no-empty
  } catch (e) {}
  return (Number(s1.replace('.', '')) * Number(s2.replace('.', ''))) / Math.pow(10, m)
}

export default multiply
