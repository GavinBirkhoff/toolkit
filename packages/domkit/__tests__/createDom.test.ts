import { createDom } from '../src'
import { isElement } from 'ts-copilot'
describe('createDom', () => {
  test('default', () => {
    const dom = createDom({ tagName: 'div' })
    const re = isElement(dom)
    expect(re).toBeTruthy()
  })
})
