import * as DOMUtil from '../src'

describe('DOMUtil', () => {
  const dom = document.createElement('div')
  dom.classList.add('box')
  test('getStyle', () => {
    expect(DOMUtil.getStyle(dom, 'display')).toBe('block')
  })
  test('hasClass', () => {
    expect(DOMUtil.hasClass(dom, 'box')).toBeTruthy()
    expect(DOMUtil.hasClass(dom, 'active')).toBeFalsy()
  })
  test('removeClass', () => {
    DOMUtil.removeClass(dom, 'box')
    expect(DOMUtil.hasClass(dom, 'box')).toBeFalsy()
  })
})
