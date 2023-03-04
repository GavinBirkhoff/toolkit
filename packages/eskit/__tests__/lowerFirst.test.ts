import { lowerFirst } from '../src'
describe('lowerFirst', () => {
   test('First => first', () => {
      expect(lowerFirst('First')).toBe('first')
   })
})
