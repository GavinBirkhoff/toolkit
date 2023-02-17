import { setStyleProps, getStyleProps, getC3Var, createDom } from '../src'

describe('setStyleProps getStyleProps', () => {
  test('defult', () => {
    const mydiv = createDom({
      container: document.body
    })
    mydiv.style.height = '10px'
    mydiv.style.fontSize = '18px'
    setStyleProps(mydiv, { height: '100px', fontSize: '16px', myTheme: 'light' })
    // expect(getStyleProps(mydiv, 'fontSize')).toBe('16px')
    // expect(getStyleProps(mydiv, 'height')).toBe('100px')
    expect(getC3Var('--my-theme', mydiv)).toBe('light')
  })
})
