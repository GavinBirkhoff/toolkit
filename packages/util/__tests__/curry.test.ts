import { curry, add } from '../src'
describe('curry', () => {
   test('1 + 2 =3', () => {
      expect(curry(add)(1, 2)).toBe(3)
   })
})
