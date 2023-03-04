import copyProperties from './copy-properties'
/**
 * @description mixin
 * @param {*[]} mixins
 * @returns {any}
 * @example
 * class DistributedEdit extends mixin(Loggable, Serializable) {
 * //
 * }
 */
const mixin = function (...mixins: any[]): any {
  class Mixin {
    constructor() {
      for (const mixin of mixins) {
        copyProperties(this, new mixin()) // 拷贝实例属性
      }
    }
  }

  for (const mixin of mixins) {
    copyProperties(Mixin, mixin) // 拷贝静态属性
    copyProperties(Mixin.prototype, mixin.prototype) // 拷贝原型属性
  }

  return Mixin
}

export default mixin
