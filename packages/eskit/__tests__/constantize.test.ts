import { constantize } from '../src'
describe('constantize function', () => {
  /* When inputs are objects with primitive types */
  it('should freeze an object with primitive type properties', () => {
    const input = { foo: 'bar', num: 123 }
    constantize(input)
    expect(Object.isFrozen(input)).toBe(true)
  })

  /* When inputs are objects with nested objects */
  it('should freeze an object with nested objects', () => {
    const input = {
      nested: {
        foo: 'bar',
        num: 123
      }
    }
    constantize(input)
    expect(Object.isFrozen(input)).toBe(true)
    expect(Object.isFrozen(input.nested)).toBe(true)
  })

  /* When inputs are arrays of objects */
  it('should freeze an array of objects', () => {
    const input = [{ foo: 'bar', num: 123 }, { nested: { hello: 'world' } }]
    constantize(input)
    expect(Object.isFrozen(input)).toBe(true)
    expect(Object.isFrozen(input[0])).toBe(true)
    expect(Object.isFrozen(input[1])).toBe(true)
    expect(Object.isFrozen(input[1].nested)).toBe(false)
  })
})
