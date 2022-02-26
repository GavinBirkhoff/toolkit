import toString from './to-string'
/**
 * @description
 * @param value
 * @returns
 */
const lowerFirst = (value: string): string => {
  const str = toString(value)
  return str.charAt(0).toLowerCase() + str.substring(1)
}

export default lowerFirst
