const objectProto = Object.prototype
/**
 * @description
 * @param value
 * @returns
 */
const isPrototype = (value: any): boolean => {
  const Ctor = value && value.constructor
  const proto = (typeof Ctor === 'function' && Ctor.prototype) || objectProto
  return value === proto
}
export default isPrototype
