/**
 * A reference to the Object.prototype.hasOwnProperty() method.
 *
 * This function allows you to check if an object has a property defined on itself (i.e., not inherited from its prototype chain).
 *
 * @param v - The value to check for a property.
 * @param p - The property to check for.
 * @returns `true` if the object has the property defined on itself, `false` otherwise.
 *
 * @example
 * ```
 * const obj = { foo: 42 }
 *
 * hasOwnProperty(obj, 'foo') // true
 * hasOwnProperty(obj, 'toString') // false
 * ```
 */
const hasOwnProperty = (obj: unknown, key: PropertyKey): boolean => Object.prototype.hasOwnProperty.call(obj, key)
export default hasOwnProperty
