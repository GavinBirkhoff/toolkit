import { filter } from '../src'
describe('filter', () => {
  it('should filter an array of numbers', () => {
    const numbers = [1, 2, 3, 4, 5]
    const isEven = (num: number) => num % 2 === 0
    const evenNumbers = filter(numbers, isEven)
    expect(evenNumbers).toEqual([2, 4])
  })

  it('should filter an object of key-value pairs', () => {
    const obj = { a: 1, b: 2, c: 3, d: 4, e: 5 }
    const isEvenValue = (val: number) => val % 2 === 0
    const evenValuesObj = filter(obj, (value) => isEvenValue(value))
    expect(evenValuesObj).toEqual({ b: 2, d: 4 })
  })

  it('should return an empty array when filtering an empty array', () => {
    const emptyArr: any[] = []
    const isEven = (num: number) => num % 2 === 0
    const evenNumbers = filter(emptyArr, isEven)
    expect(evenNumbers).toEqual([])
  })

  it('should return an empty object when filtering an empty object', () => {
    const emptyObj = {}
    const isEvenValue = (val: number) => val % 2 === 0
    const evenValuesObj = filter(emptyObj, (_, value) => isEvenValue(value))
    expect(evenValuesObj).toEqual({})
  })

  it('should handle filtering with an empty callback', () => {
    const numbers = [1, 2, 3, 4, 5]
    const emptyCallback = () => true
    const allNumbers = filter(numbers, emptyCallback)
    expect(allNumbers).toEqual(numbers)
  })
})
