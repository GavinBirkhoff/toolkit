import isType from './is-type'
export default (value: any) => (Array.isArray ? Array.isArray(value) : isType(value, 'Array'))
