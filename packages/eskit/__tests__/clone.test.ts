import { clone } from '../src'

describe('clone', () => {
  it('should clone an object correctly', () => {
    const inputObj = { a: 1, b: { c: 2 } }
    const clonedObj = clone(inputObj)
    expect(clonedObj).toEqual(inputObj)
    // check if the cloned object has different reference than the input object
    expect(clonedObj).not.toBe(inputObj)
    expect(clonedObj.b).not.toBe(inputObj.b)
  })

  it('should handle cloning of primitives correctly', () => {
    // input is a string
    let input = 'hello'
    let clonedInput = clone(input)
    expect(clonedInput).toBe(input)

    // input is a number
    input = 123 as any
    clonedInput = clone(input)
    expect(clonedInput).toBe(input)

    // input is null
    input = null as any
    clonedInput = clone(input)
    expect(clonedInput).toBe(input)
  })
})
