import copyProperties from './copy-properties'
/**
 * Mixin
 * @param {Array} mixins
 * @returns {any}
 * @example
 * class DistributedEdit extends mixin(Loggable, Serializable) {
 * //
 * }
 * @todo Optimization Type
 */
const mixin = function (...mixins: any[]): any {
  class Mixin {
    constructor() {
      for (const mixin of mixins) {
        copyProperties(this, new mixin()) // Copy Instance Properties
      }
    }
  }

  for (const mixin of mixins) {
    copyProperties(Mixin, mixin) // Copy static properties
    copyProperties(Mixin.prototype, mixin.prototype) // Copy prototype properties
  }

  return Mixin
}

export default mixin
