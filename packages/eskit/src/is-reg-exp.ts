import isType from './is-type'
/**
 * @description isRegExp
 * @param  {any} str
 * @returns {boolean}
 */

const isRegExp = (str: any): str is RegExp => {
  return isType(str, 'RegExp')
}

export default isRegExp
