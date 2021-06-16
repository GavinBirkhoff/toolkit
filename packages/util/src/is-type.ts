export default (value: unknown, type: string): boolean =>
  Object.prototype.toString.call(value) === '[object ' + type + ']'
