import { createDom } from '../src'
import { isElement } from '@gavinbirkhoff/util'
describe('createDom', () => {
  test('default', () => {
    const dom = createDom({ tagName: 'div' })
    const re = isElement(dom)
    expect(re).toBeTruthy()
  })
})
