/**
 * Returns a random integer between the specified minimum and maximum values (inclusive).
 *
 * This function returns a random integer between the specified minimum and maximum values (inclusive). The minimum and maximum values must be integers, and the minimum value must be less than or equal to the maximum value.
 *
 * @param min - The minimum value (inclusive).
 * @param max - The maximum value (inclusive).
 * @returns A random integer between the specified minimum and maximum values (inclusive).
 *
 * @example
 * ```
 * const randomInt = getRandomInt(1, 10)
 * console.log(randomInt)
 * ```
 */
const getRandomInt = (min: number, max: number): number => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
export default getRandomInt
