import { setClass, createDom, addClass, getClass } from '../src'

describe('setClass', () => {
  test('default', () => {
    const dom = createDom()
    addClass(dom, 'foo')
    setClass(dom, 'boo')
    expect(getClass(dom)).toBe('boo')
  })
})
