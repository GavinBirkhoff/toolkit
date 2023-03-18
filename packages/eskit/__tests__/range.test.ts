import { range } from '../src'
describe('range', () => {
  test('default', () => {
    expect(range(4)).toEqual([0, 1, 2, 3])
    expect(range(-4)).toEqual([0, -1, -2, -3])
    expect(range(1, 5)).toEqual([1, 2, 3, 4])
    expect(range(0, 20, 5)).toEqual([0, 5, 10, 15])
  })
})
