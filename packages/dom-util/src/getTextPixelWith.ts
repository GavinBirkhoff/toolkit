const getTextPixelWith = (text: string, font: CSSStyleDeclaration): number => {
  const { fontStyle, fontVariant, fontWeight, fontSize, fontFamily } = font
  const ctx = document.createElement('canvas').getContext('2d')
  ctx!.font = `${fontStyle !== undefined ? fontStyle : ''} ${fontVariant !== undefined ? fontVariant : ''} ${
    fontWeight !== undefined ? fontWeight : ''
  } ${fontSize} "${fontFamily}"`.trimStart()
  const dimension = ctx!.measureText(text)
  return dimension.width
}
export default getTextPixelWith
