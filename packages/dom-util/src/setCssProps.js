export default function setCssProps(element, props) {
  if (element == null && props.size < 1) return
  props.forEach((value, key) => {
    console.log(`${key} ${value}`)
    let newKey = key
    if (element.style.hasOwnProperty(newKey)) {
      element.style.setProperty(newKey, value)
    } else {
      newKey = newKey.replace(/([A-Z])/g, "-$1").toLowerCase()
      element.style.setProperty(`--${newKey}`, value)
    }
  })
}
