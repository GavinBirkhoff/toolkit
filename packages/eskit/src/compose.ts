/**
 * Composes an array of functions into a single function from right to left.
 * @template T The type of the input and output value.
 * @param {Function} funcs An array of functions to compose.
 * @returns {Function} A new function that will execute the input functions in reverse order.
 * @since 1.0.0
 *
 * @example
 * const add = (a: number) => (b: number) => a + b;
 * const multiplyByTwo = (a: number) => a * 2;
 * const addAndMultiply = compose(multiplyByTwo, add(1), add(2));
 * const result = addAndMultiply(3); // (3 + 2 + 1) * 2 = 12
 */
const compose = <T>(...funcs: Array<(arg: T) => T>): ((arg: T) => T) => {
  return (arg: T): T => funcs.reduceRight((acc, func) => func(acc), arg)
}

export default compose
