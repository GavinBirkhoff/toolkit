import { addCss } from '../src'

describe('addCss', () => {
  beforeEach(() => {
    // 清空样式表缓存
    document.head.innerHTML = ''
  })

  it('should create a new sheet if no sheet with specified title is found', () => {
    addCss('.test-class', { color: 'red' }, 'new-sheet')
    const styleSheets = Array.from(document.styleSheets)
    expect(styleSheets).toHaveLength(1)
    // expect(styleSheets[0].title).toBe('new-sheet')
  })

  // it('should use an existing sheet if a sheet with specified title is found', () => {
  //   const sty = document.createElement('style')
  //   sty.title = 'existing-sheet'
  //   document.head.appendChild(sty)
  //   addCss('.test-class', { color: 'red' }, 'existing-sheet')
  //   const styleSheets = Array.from(document.styleSheets)
  //   expect(styleSheets).toHaveLength(1)
  //   expect(styleSheets[0].title).toBe('existing-sheet')
  // })

  // it('should append the new sheet to the head', () => {
  //   addCss('.test-class', { color: 'red' }, 'new-sheet')
  //   expect(document.head.lastChild).toBeInstanceOf(HTMLStyleElement)
  //   expect((document.head.lastChild as HTMLStyleElement).title).toBe('new-sheet')
  // })

  // it('should create a CSSRule using the selector and CSS property-value pairs', () => {
  //   addCss('.test-class', { color: 'red', backgroundColor: 'blue' }, 'test-sheet')
  //   const rules = (document.styleSheets[0] as CSSStyleSheet).cssRules
  //   expect(rules).toHaveLength(1)
  //   const styleRule = rules[0] as CSSStyleRule | CSSPageRule
  //   expect('selectorText' in styleRule).toBeTruthy()
  //   expect(styleRule.selectorText).toBe('.test-class')
  //   expect(styleRule.style.color).toBe('red')
  //   expect(styleRule.style.backgroundColor).toBe('blue')
  // })

  // it('should convert camelCase CSS property names to kebab-case', () => {
  //   addCss('.test-class', { backgroundColor: 'blue', fontSize: '16px' }, 'test-sheet')
  //   const rule = (document.styleSheets[0] as CSSStyleSheet).cssRules[0] as CSSStyleRule | CSSPageRule
  //   expect('selectorText' in rule).toBeTruthy()
  //   expect(rule.style.cssText).toBe('background-color: blue; font-size: 16px;')
  // })
})
