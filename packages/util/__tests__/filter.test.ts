import { filter } from '../src'
describe('filter', () => {
   test('filter array', () => {
      expect(filter([1, 2, 3], (item) => item > 2)).toEqual([3])
   })
})
