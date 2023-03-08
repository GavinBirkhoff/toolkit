/**
 * Get the value of the css3 variable of the element
 * @param {string} key name of css3 variable
 * @param {string}  ele element
 * @since 1.0.0
 * @example
 * getC3Var('--theme')
 */
const getC3Var = (key: string, ele = document.documentElement): string => {
  const eleStyle = window.getComputedStyle(ele)
  const ans = eleStyle.getPropertyValue(key).trim()
  return ans
}

export default getC3Var
