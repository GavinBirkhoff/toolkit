/**
 * @since 1.0.0
 * @description set css props
 * @param {HTMLElement} element
 * @param {*} props
 * @returns
 */

const setCssProps = (element: HTMLElement, props: any): any => {
  if (element == null && props.size < 1) return
  props.forEach((value: any, key: any) => {
    // console.log(`${key} ${value}`)
    let newKey = key
    if ({}.hasOwnProperty.call(element.style, newKey)) {
      element.style.setProperty(newKey, value)
    } else {
      newKey = newKey.replace(/([A-Z])/g, '-$1').toLowerCase()
      element.style.setProperty(`--${newKey}`, value)
    }
  })
}

export default setCssProps
