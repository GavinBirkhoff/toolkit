/**
 * Get a range of random int number
 * @category Number
 * @param {number} min
 * @param {number} max
 * @returns {number}
 * @since 1.0.0
 * @example
 * // returns [1-5]
 * getRandomInt(1,5)
 */

const getRandomInt = (min: number, max: number): number => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
export default getRandomInt
