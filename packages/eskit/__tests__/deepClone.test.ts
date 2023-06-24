import { deepClone } from '../src'

describe('deepClone', () => {
  test('clones primitive values', () => {
    const val = 42
    expect(deepClone(val)).toEqual(val)
  })

  test('clones arrays', () => {
    const arr = [1, 2, 3]
    expect(deepClone(arr)).toEqual(arr)
  })

  test('clones objects', () => {
    const obj = { foo: 'bar', baz: { qux: 42 } }
    expect(deepClone(obj)).toEqual(obj)
  })

  test('clones dates', () => {
    const date = new Date()
    expect(deepClone(date)).toEqual(date)
  })

  test('clones regular expressions', () => {
    const regexp = /test/gi
    expect(deepClone(regexp)).toEqual(regexp)
  })

  it('should clone a simple object', () => {
    const obj = { a: 1, b: 'two', c: true }
    const clonedObj = deepClone(obj)
    expect(clonedObj).toEqual(obj)
    expect(clonedObj).not.toBe(obj)
  })

  it('should clone an object with nested objects', () => {
    const obj = { a: 1, b: { c: 2, d: 'three' }, e: { f: false } }
    const clonedObj = deepClone(obj)
    expect(clonedObj).toEqual(obj)
    expect(clonedObj).not.toBe(obj)
    expect(clonedObj.b).not.toBe(obj.b)
    expect(clonedObj.e).not.toBe(obj.e)
  })

  it('should clone an object with nested arrays', () => {
    const obj = { a: 1, b: [2, 'three', { c: false }] }
    const clonedObj = deepClone(obj)
    expect(clonedObj).toEqual(obj)
    expect(clonedObj).not.toBe(obj)
    expect(clonedObj.b).not.toBe(obj.b)
    expect(clonedObj.b[2]).not.toBe(obj.b[2])
  })

  it('should clone an object with functions', () => {
    const obj = {
      a: 1,
      b() {
        return 'hello'
      },
      c: {
        d(x: number, y: number) {
          return x + y
        }
      }
    }
    const clonedObj = deepClone(obj)
    expect(clonedObj).toEqual(obj)
    expect(clonedObj).not.toBe(obj)
    expect(typeof clonedObj.b).toBe('function')
    expect(typeof clonedObj.c.d).toBe('function')
    expect(clonedObj.b()).toBe(obj.b())
    expect(clonedObj.c.d(2, 3)).toBe(obj.c.d(2, 3))
  })
})
