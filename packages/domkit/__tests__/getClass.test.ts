import { getClass } from '../src'
describe('getClass', () => {
  test('default', () => {
    const dom = document.createElement('div')
    dom.classList.add('wrap')
    dom.classList.add('box')
    expect(getClass(dom)).toBe('wrap box')
  })
})
