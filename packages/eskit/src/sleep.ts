/**
 * Sleep for the specified amount of time.
 *
 * @param {number} ms - The number of milliseconds to wait.
 * @returns {Promise<void>} A Promise that resolves after the specified time has elapsed.
 *
 * @example
 * // Wait 2 seconds, then log a message
 * async function main() {
 *   console.log('Sleeping...');
 *   await sleep(2000);
 *   console.log('Waking up!');
 * }
 *
 * main();
 *
 * @since 1.0.0
 */
const sleep = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export default sleep
