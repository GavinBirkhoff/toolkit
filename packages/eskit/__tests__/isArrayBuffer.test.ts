import { isArrayBuffer } from '../src'

describe('isArrayBuffer', () => {
  it('returns false for an array', () => {
    expect(isArrayBuffer([1, 2, 3])).toBe(false)
  })

  it('returns true for an `ArrayBuffer` object', () => {
    const buffer = new ArrayBuffer(16)
    expect(isArrayBuffer(buffer)).toBe(true)
  })
})
