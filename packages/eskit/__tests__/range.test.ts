import { range } from '../src'
describe('range', () => {
   test('default', () => {
      expect(range(4)).toEqual([0, 1, 2, 3])
   })
})
