import { canUseDom } from '../src'
describe('canUseDom', () => {
  test('default', () => {
    expect(canUseDom()).toBeTruthy()
  })
})
