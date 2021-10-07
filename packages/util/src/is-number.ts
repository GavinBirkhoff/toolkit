import isType from './is-type'

export default (value: any): value is number => isType('Number', value)
