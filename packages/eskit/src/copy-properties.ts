/**
 * Copies all properties of `source` to `target`, including non-enumerable ones.
 *
 * @since 1.0.0
 *
 * @example
 * const source = { a: 1, b: 2 };
 * const target = { c: 3 };
 *
 * copyProperties(target, source);
 *
 * console.log(target); // {a: 1, b: 2, c: 3}
 *
 * @param target - The target object.
 * @param source - The source object to copy from.
 */
const copyProperties = <T, U extends Record<string, unknown>>(target: T, source: U): void => {
  for (const key of Reflect.ownKeys(source)) {
    if (key !== 'constructor' && key !== 'prototype' && key !== 'name') {
      const desc = Object.getOwnPropertyDescriptor(source, key)
      Object.defineProperty(target, key, desc ?? {})
    }
  }
}

export default copyProperties
