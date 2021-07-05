import isType from './is-type'

export default (value: any): value is Date => isType(value, 'Date')
