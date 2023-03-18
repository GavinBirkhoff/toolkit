import { difference } from '../src'
describe('difference', () => {
  test('default', () => {
    expect(difference([2, 1], [2, 3])).toEqual([1])
  })
})
