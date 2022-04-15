import { createDom } from '../src'
import { isElement } from 'util4js'
describe('createDom', () => {
  test('default', () => {
    const dom = createDom({ tagName: 'div' })
    const re = isElement(dom)
    expect(re).toBeTruthy()
  })
})
