import isType from './is-type'
/**
 * @description
 * @param str
 * @returns
 */
const isRegExp = (str: any): str is RegExp => {
  return isType(str, 'RegExp')
}

export default isRegExp
