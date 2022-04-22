import hasOwnProperty from './hasOwnProperty'

function _mix<Base, Source>(dist: Base & Source, obj: Source): void {
  for (const key in obj) {
    if (key !== 'constructor' && hasOwnProperty.call(obj, key) && obj[key] !== undefined) {
      ;(<any>dist)[key] = obj[key]
    }
  }
}
/**
 * @description mix
 * @param  {Base&Source} dist
 * @param  {Source[]} ...args
 * @returns {Base & Source}
 */
const mix = <Base, Source>(dist: Base & Source, ...args: Source[]): Base & Source => {
  args.forEach((arg) => {
    _mix(dist, arg)
  })
  return dist
}

export default mix
