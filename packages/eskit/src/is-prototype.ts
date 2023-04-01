const objectProto = Object.prototype
/**
 * Checks if `value` is likely a prototype object.
 *
 * @param value - The value to check.
 * @returns Whether `value` is a prototype object.
 * @example
 *
 * function Foo() {}
 * isPrototype(Foo.prototype)
 * // => true
 *
 * isPrototype({})
 * // => false
 */
const isPrototype = (value: unknown): boolean => {
  const Ctor = value && value.constructor
  const proto = (typeof Ctor === 'function' && Ctor.prototype) || objectProto
  return value === proto
}
export default isPrototype
