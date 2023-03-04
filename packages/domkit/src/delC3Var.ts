/**
 * @description Delete css3 variable A of element
 * @param {string} key name of css3 variable
 * @param {string}  ele element
 */
const delC3Var = (key: string, ele = document.documentElement): void => {
  ele.style.removeProperty(key)
}

export default delC3Var
