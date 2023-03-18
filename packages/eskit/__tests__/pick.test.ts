import { pick } from '../src'
describe('pick', () => {
  test('default', () => {
    expect(pick<string | number>({ a: 1, b: '2', c: 3 }, ...['a', 'c'])).toEqual({ a: 1, c: 3 })
  })
})
