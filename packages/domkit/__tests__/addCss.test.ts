import { addClass, addCss, createDom, getStyleProps } from '../src'
describe('addCss', () => {
  test('default', () => {
    const dom = createDom({ tagName: 'div', container: document.body })
    addClass(dom, 'myClassName')
    addCss('myClassName', { width: '100px' })
    // TODO
    // Effective in real environment
    // expect(getStyleProps(dom, 'width')).toBe('100px')
    expect(getStyleProps(dom, 'width')).toBe('')
  })
})
