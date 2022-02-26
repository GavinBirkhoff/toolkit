import toString from './to-string'
/**
 * @description
 * @param value
 * @returns
 */
const upperFirst = (value: string): string => {
  const str = toString(value)
  return str.charAt(0).toUpperCase() + str.substring(1)
}

export default upperFirst
