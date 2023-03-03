import { setClass, createDom, addClass, getClass } from '../src'

describe('setClass', () => {
  test('default', () => {
    const dom = createDom({ tagName: 'div' })
    addClass(dom, 'foo')
    setClass(dom, 'boo')
    expect(getClass(dom)).toBe('boo')
  })
})
