/**
 * @description Get a range of random int number
 * @category Number
 * @param {Number} min
 * @param {Number} max
 * @returns {Number}
 * @example
 * getRandomInt(1,5)
 */

const getRandomInt = (min: number, max: number): number => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
export default getRandomInt
