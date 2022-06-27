import { each } from '../src'
describe('each', () => {
   test('each null', () => {
      let i = 0
      each(null as any, () => {
         i++
      })
      expect(i).toBe(0)
   })
   test('each array', () => {
      const arr = [1, 2, 3]
      let i = 0
      each(arr, (item, index) => {
         expect(item).toBe(arr[index])
         i++
      })
      expect(i).toBe(arr.length)
   })
   test('each object', () => {
      let i = 0
      const obj = { a: 1, b: 2, c: 3, d: 4, e: 5 } as any
      each(obj, (item, index) => {
         expect(item).toBe(obj[index])
         i++
      })
      expect(i).toBe(5)
   })
   test('each break', () => {
      const arr = [1, 2, 3, 4, 5]
      let j = 0
      each(arr, (item, i) => {
         if (i === 2) {
            return false
         }
         j++
      })
      expect(j).toBe(2)

      const obj = { a: 1, b: 2, c: 3 }
      j = 0
      each(obj, (v, k) => {
         if (k === 'b') {
            return false
         }
         j++
      })
      expect(j).toBe(1)
   })
})
