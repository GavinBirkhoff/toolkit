/**
 * Add two numbers with fixed precision.
 * @param {number} a The first number to add.
 * @param {number} b The second number to add.
 * @returns {number} The result of adding the two numbers.
 * @since 1.0.0
 * @example
 *
 * add(0.1, 0.2) // returns 0.3
 */
const add = (a: number, b: number): number => {
  /**
   * Get the number of decimal places in a number.
   *
   * @param {number} num - A number to find the decimal places of.
   * @returns {number} The number of decimal places in the number.
   */
  const getDecimalPlaces = (num: number): number => {
    const decimalPart = String(num).split('.')[1]
    return decimalPart ? decimalPart.length : 0
  }

  const m = Math.pow(10, Math.max(getDecimalPlaces(a), getDecimalPlaces(b)))
  return Math.round(((a * m + b * m) / m) * 1000000) / 1000000
}

export default add
