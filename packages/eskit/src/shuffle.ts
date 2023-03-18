/**
 * Disorder array order
 * @category Array
 * @param  {T[]} arr
 * @returns {void}
 * @since 1.0.0
 * @example
 * shuffle(arr)
 */
const shuffle = <T>(arr: T[]): void => {
  arr.sort(() => 0.5 - Math.random())
}

export default shuffle
