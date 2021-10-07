import isType from './is-type'
/**
 * @description Check whether a value is a function
 * @param  {*} value The value checked
 * @return {Boolean}
 */
export default (value: any): value is () => void => {
  return isType('Function', value)
}
