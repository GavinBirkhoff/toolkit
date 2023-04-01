/**
 * Curry a function with given arguments.
 *
 * @param fn - The function to be curried.
 * @returns A curried function.
 *
 * @example
 * const add = (a: number, b: number) => a + b;
 * const curriedAdd = curry(add);
 *
 * const add5 = curriedAdd(5);
 * console.log(add5(3)); // Output: 8
 *
 * const add2 = curriedAdd(2);
 * console.log(add2(4)); // Output: 6
 */
function curry(fn: (...args: any[]) => any) {
  return function curried(...args: any[]): (...args: any[]) => any {
    return args.length >= fn.length ? fn(...args) : (...moreArgs: any[]) => curried(...args, ...moreArgs)
  }
}
export default curry
