import isType from './is-type'

export default (value: any): value is boolean => value === true || value === false || isType('Boolean', value)
