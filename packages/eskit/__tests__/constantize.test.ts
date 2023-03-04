import { constantize } from '../src'
describe('constantize', () => {
   test('cannot change value of object', () => {
      const obj = {
         act: 'free',
         sub: {
            act: 'free'
         }
      }
      constantize(obj)
      expect(() => (obj.sub.act = 'new free')).toThrow()
   })
})
