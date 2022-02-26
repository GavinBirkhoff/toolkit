/**
 * @description copy properties
 * @param {Object} target
 * @param {Object} source
 */
const copyProperties = (target: unknown, source: any) => {
  for (const key of Reflect.ownKeys(source)) {
    if (key !== 'constructor' && key !== 'prototype' && key !== 'name') {
      const desc = Object.getOwnPropertyDescriptor(source, key)
      Object.defineProperty(target, key, desc ?? {})
    }
  }
}

export default copyProperties
