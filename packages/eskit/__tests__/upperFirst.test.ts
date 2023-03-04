import { upperFirst } from '../src'
describe('upperFirst', () => {
   test('first => First', () => {
      expect(upperFirst('first')).toBe('First')
   })
})
