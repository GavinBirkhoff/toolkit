import { copyProperties } from '../src'
describe('copyProperties', () => {
  it('copies all properties of the source object', () => {
    const source = { a: 1, b: 2 }
    const target = { c: 3 }

    copyProperties(target, source)

    expect(target).toEqual({ a: 1, b: 2, c: 3 })
  })

  it('does not copy constructor, prototype, or name keys', () => {
    class MyClass {}

    const source = { a: 1, b: 2, constructor: MyClass, prototype: {}, name: 'MyClass' }
    const target: any = { c: 3 }

    copyProperties(target, source)

    expect(target).toEqual({ a: 1, b: 2, c: 3 })
    expect(target.constructor).not.toEqual(MyClass)
    expect(target.prototype).toBeUndefined()
    expect(target.name).toBeUndefined()
  })
})
