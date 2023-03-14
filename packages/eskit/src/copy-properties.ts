/**
 * Copy properties
 * @param {Object} target
 * @param {Object} source
 * @since 1.0.0
 * @example
 * copyProperties(t, s)
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
