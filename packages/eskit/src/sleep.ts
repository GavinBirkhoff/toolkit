/**
 * Sleep
 * @param  {number} time Sleep time
 * @since 1.0.0
 * @example
 * await sleep(300)
 */
const sleep = (time: number): Promise<void> => new Promise<void>((resolve) => setTimeout(() => resolve(), time))

export default sleep
