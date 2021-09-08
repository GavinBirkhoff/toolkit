const toFront = (el: HTMLElement): void => {
  const parent = el.parentNode
  parent?.appendChild(el)
}

export default toFront
