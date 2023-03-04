/**
 * @description generate array
 * @param {number} start The start of the range.
 * @param {number|undefined} end The end of the range.
 * @param {number|undefined} [step=1] The value to increment or decrement by.
 * @returns {Array} Returns the range of numbers.
 * @example
 * range(4)
 * // [0, 1, 2, 3]
 *
 * range(-4)
 * // [0, -1, -2, -3]
 *
 * range(1, 5)
 * // [1, 2, 3, 4]
 *
 * range(0, 20, 5)
 * // [0, 5, 10, 15]
 *
 * range(0, -4, -1)
 * // [0, -1, -2, -3]
 *
 * range(1, 4, 0)
 * // [1, 1, 1]
 *
 * range(0)
 * // []
 */

const range = (start: number, end?: number, step?: number): number[] => {
  if (end === undefined) {
    end = start
    start = 0
  }
  if (step === undefined) {
    step = start < end ? 1 : -1
  }
  let index = -1
  let length = Math.max(Math.ceil((end - start) / (step || 1)), 0)
  const result = new Array(length)

  while (length--) {
    result[++index] = start
    start += step
  }
  return result
}

export default range
