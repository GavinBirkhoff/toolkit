const objectProto = Object.prototype
/**
 * @description isPrototype
 * @param {any} value
 * @returns {boolean}
 */
const isPrototype = (value: any): boolean => {
  const Ctor = value && value.constructor
  const proto = (typeof Ctor === 'function' && Ctor.prototype) || objectProto
  return value === proto
}
export default isPrototype
