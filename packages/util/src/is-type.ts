export default (type: string, value: unknown): boolean =>
  Object.prototype.toString.call(value) === '[object ' + type + ']'
