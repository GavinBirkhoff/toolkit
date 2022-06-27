import { copyProperties } from '../src'
describe('copyProperties', () => {
   test('copy properties', () => {
      const s = { foo: 'source' }
      const t = {}
      copyProperties(t, s)
      expect((t as any).foo).toBe('source')
   })
})
