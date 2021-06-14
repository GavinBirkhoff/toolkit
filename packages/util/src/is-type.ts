export default (value: any, type: string): boolean => Object.prototype.toString.call(value) === '[object ' + type + ']'
