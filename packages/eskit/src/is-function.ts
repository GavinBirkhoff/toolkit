import isType from './is-type'
/**
 * @description Check whether a value is a function
 * @param  {any} value The value checked
 * @return {boolean}
 */
const isFunction = (value: any): value is () => void => {
  return isType('Function', value)
}

export default isFunction
