import { mix } from '../src'
describe('mix', () => {
   test('mix', () => {
      const obj = {}
      const obj1 = { a: 1 }
      const obj2 = { b: 2 }
      const final = mix<Partial<any>, Partial<any>>(obj, obj1, obj2)
      expect(final).toEqual({ a: 1, b: 2 })
   })
})
