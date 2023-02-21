import { addClass, createDom, getClass } from '../src'
describe('addClass', () => {
  test('default', () => {
    const dom = document.createElement('div')
    const name = 'myClassName'
    addClass(dom, name)
    expect(dom.className).toBe(name)
  })
  test('add exist className and classNames', () => {
    const dom = createDom()
    const name = 'myClassName'
    const name2 = 'myClassName a b c'
    addClass(dom, name)
    addClass(dom, name2)
    expect(getClass(dom)).toBe(name + ' ' + name2)
  })
})
