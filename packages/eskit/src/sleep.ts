/**
 * Pauses the execution for the specified amount of time.
 *
 * @param ms - The number of milliseconds to sleep.
 *
 * @returns A promise that resolves after the specified amount of time.
 *
 * @example
 * ```
 * console.log('Start')
 * await sleep(2000)
 * console.log('End')
 * ```
 *
 */
const sleep = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export default sleep
