/**
 * Set the value of the css3 variable of the element
 * @param key name of css3 variable
 * @param val the value of the css3 variable
 * @param ele element
 * @since 1.0.0
 * @example
 * setC3Var('--theme', 'green')
 */
const setC3Var = (key: string, val: string, ele = document.documentElement): void => {
  ele.style.setProperty(key, val)
}

export default setC3Var
