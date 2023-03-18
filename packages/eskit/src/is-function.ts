import isType from './is-type'
/**
 * Determine whether an object is of type Function
 * @param {*} value Target value
 * @return {boolean} Is it of type Function
 * @since 1.0.0
 * @example
 * // returns true
 * isFunction(()=>{})
 */
const isFunction = (value: unknown): value is () => void => {
  return isType('Function', value)
}

export default isFunction
