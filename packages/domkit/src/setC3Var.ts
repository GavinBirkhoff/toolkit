/**
 * @description Set the value of the css3 variable of the element
 * @param key name of css3 variable
 * @param val the value of the css3 variable
 * @param ele element
 */
const setC3Var = (key: string, val: string, ele = document.documentElement): void => {
  ele.style.setProperty(key, val)
}

export default setC3Var
