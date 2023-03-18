import { isArrayBuffer } from '../src'
describe('isArguments', () => {
  test('default', () => {
    const ab = new ArrayBuffer(2)
    expect(isArrayBuffer(ab)).toBeTruthy()
  })
})
