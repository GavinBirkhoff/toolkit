import { pick } from '../src'
describe('pick', () => {
  it('picks the specified properties from the object', () => {
    const obj = { foo: 1, bar: 'hello', baz: true }
    expect(pick(obj, 'foo', 'baz')).toEqual({ foo: 1, baz: true })
  })

  it('returns a new object', () => {
    const obj = { foo: 1, bar: 'hello', baz: true }
    const result = pick(obj, 'foo', 'baz')
    expect(result).not.toBe(obj)
  })

  it('infers the resulting object property types', () => {
    const obj = { foo: 1, bar: 'hello', baz: true }
    const result = pick(obj, 'foo', 'baz')
    expect(result.foo).toBe(1)
    expect(result.baz).toBe(true)
    // @ts-expect-error
    result.bar // should be an error because 'bar' is not picked
  })
})
