import isType from './is-type'
export default (value: unknown): value is Array<unknown> =>
  Array.isArray ? Array.isArray(value) : isType(value, 'Array')
