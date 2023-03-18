import hasOwnProperty from './hasOwnProperty'

function _mix<Base, Source>(dist: Base & Source, obj: Source): void {
  for (const key in obj) {
    if (key !== 'constructor' && hasOwnProperty.call(obj, key) && obj[key] !== undefined) {
      ;(<any>dist)[key] = obj[key]
    }
  }
}
/**
 * Blend the attributes of multiple objects to the target object
 * @param  {Object} dist Target object
 * @param  {Object[]} ...args
 * @returns {Object}
 * @since 1.0.0
 * @example
 * mix<Partial<any>, Partial<any>>(obj, obj1, obj2)
 */
const mix = <Base, Source>(dist: Base & Source, ...args: Source[]): Base & Source => {
  args.forEach((arg) => {
    _mix(dist, arg)
  })
  return dist
}

export default mix
