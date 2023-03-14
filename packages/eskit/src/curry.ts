/**
 * Curry a function
 * @param fn Target function
 * @returns A curried function
 * @since 1.0.0
 * @example
 * // returns 3
 * curry(add).(1).(2)
 */
function curry(fn: (...args: any[]) => any) {
  return function curried(...args: any[]): (...args: any[]) => any {
    return args.length >= fn.length ? fn(...args) : (...moreArgs: any[]) => curried(...args, ...moreArgs)
  }
}
export default curry
