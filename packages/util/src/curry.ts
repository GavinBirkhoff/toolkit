/**
 *
 * @param {*} fn
 * @returns
 */
const curry = (fn: (...rest: any[]) => any, ...rest: any[]): ((...rest: any[]) => any) => {
  // const slice = Array.prototype.slice,
  //   stored_args = slice.call(arguments, 1)
  const stored_args = [...rest]
  return (...rest: any[]) => {
    // const new_args = slice.call(arguments),
    //   args = stored_args.concat(new_args)
    const new_args = [...rest]
    const args = stored_args.concat(new_args)
    // return fn.apply(null, args)
    return fn(...args)
  }
}

export default curry
