import { range } from '../src'
describe('range', () => {
  it('returns an empty array if end < start', () => {
    expect(range(5, 1)).toEqual([5, 4, 3, 2])
  })

  it('returns an array from 0 to end if end is passed', () => {
    expect(range(3)).toEqual([0, 1, 2])
  })

  it('returns an array from start to end if both are passed', () => {
    expect(range(1, 5)).toEqual([1, 2, 3, 4])
  })

  it('returns an array incrementing by the passed step', () => {
    expect(range(0, 10, 2)).toEqual([0, 2, 4, 6, 8])
  })

  it('returns an array decrementing by the passed step', () => {
    expect(range(10, 0, -2)).toEqual([10, 8, 6, 4, 2])
  })

  it('returns an array with only one number if both start and end are the same', () => {
    expect(range(3, 3)).toEqual([])
  })
})
