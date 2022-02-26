// TODO
function schonfinkelize(fn) {
  const slice = Array.prototype.slice,
    stored_args = slice.call(arguments, 1)
  return function () {
    const new_args = slice.call(arguments),
      args = stored_args.concat(new_args)
    return fn.apply(null, args)
  }
}
