import { hasClass } from '../src'
describe('hasClass', () => {
  test('default', () => {
    const dom = document.createElement('div')
    dom.classList.add('wrap')
    dom.classList.add('box')
    expect(hasClass(dom, 'box')).toBeTruthy()
  })
})
