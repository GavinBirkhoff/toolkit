/**
 * @description Get a range of random numbers
 * @param {Number} min
 * @param {Number} max
 * @returns {Number}
 */
const randomNum = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
export default randomNum
