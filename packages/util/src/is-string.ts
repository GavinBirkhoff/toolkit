import isType from './is-type'

export default (value: any): value is string => {
  return isType('String', value)
}
