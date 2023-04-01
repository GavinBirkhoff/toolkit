import { isArguments } from '../src'

describe('isArguments', () => {
  it('returns true for an `arguments` object', () => {
    function sampleFunc() {
      // eslint-disable-next-line prefer-rest-params
      expect(isArguments(arguments)).toBe(true)
    }
    sampleFunc()
  })

  it('returns false for an array', () => {
    expect(isArguments([1, 2, 3])).toBe(false)
  })
})
