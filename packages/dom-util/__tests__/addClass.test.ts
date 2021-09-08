import { addClass } from '../src'
describe('addClass', () => {
  test('default', () => {
    const dom = document.createElement('div')
    const name = 'myClassName'
    addClass(dom, name)
    expect(dom.className).toBe(name)
  })
})
