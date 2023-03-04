import { deepClone } from '../src'
describe('deepClone', () => {
   test('deep clone a  object', () => {
      const obj = { name: 'gavin', age: 28, favorite: ['study', 'exercise'] }
      const objCopy = deepClone(obj)
      expect(obj !== objCopy).toBeTruthy()
      expect(JSON.stringify(objCopy)).toBe(JSON.stringify(obj))
      expect(objCopy).toEqual(obj)
   })
})
