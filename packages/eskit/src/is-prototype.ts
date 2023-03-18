const objectProto = Object.prototype
/**
 * Determine whether an object is of type Prototype
 * @param {*} value Target value
 * @returns {boolean}  Is it of type Prototype
 * @since 1.0.0
 * @example
 * // returns true
 * isPrototype(Reflect.getPrototypeOf({}))
 */
const isPrototype = (value: any): boolean => {
  const Ctor = value && value.constructor
  const proto = (typeof Ctor === 'function' && Ctor.prototype) || objectProto
  return value === proto
}
export default isPrototype
