interface FontSheet {
  fontStyle?: string
  fontVariant?: string
  fontWeight?: string
  fontSize?: string
  fontFamily?: string
}
/**
 * Get with from text by pixel
 * @param {String} text
 * @param {Object} font
 * @returns {number}
 * @since 1.0.0
 * @example
 * // returns number
 * getTextPixelWith('hello word')
 */
const getTextPixelWith = (text: string, font?: FontSheet): number => {
  const { fontStyle, fontVariant, fontWeight, fontSize = '16px', fontFamily = 'Arial' } = font ?? {}
  const ctx = document.createElement('canvas')?.getContext('2d')
  if (ctx === null) return 0
  ctx.font = `${fontStyle !== undefined ? fontStyle : ''} ${fontVariant !== undefined ? fontVariant : ''} ${
    fontWeight !== undefined ? fontWeight : ''
  } ${fontSize} "${fontFamily}"`.trimStart()
  const dimension = ctx.measureText(text)
  return dimension.width
}
export default getTextPixelWith
