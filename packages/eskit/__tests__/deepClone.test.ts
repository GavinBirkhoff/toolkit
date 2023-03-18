import { deepClone } from '../src'
describe('deepClone', () => {
  test('Clone an object deeply', () => {
    const obj = { name: 'gavin', age: 28, favorite: ['study', 'exercise'] }
    const objCopy = deepClone(obj)
    expect(obj !== objCopy).toBeTruthy()
    expect(JSON.stringify(objCopy)).toBe(JSON.stringify(obj))
    expect(objCopy).toEqual(obj)
  })

  test('Alert deep attributes of a object clone deeply', () => {
    const obj = {
      name: 'gavin',
      sub: {
        sub: { age: 18 }
      }
    }
    const objCopy = deepClone<any>(obj)
    objCopy.sub.sub.age = 19
    expect(objCopy.sub.sub.age).toBe(19)
    expect(obj.sub.sub.age).toBe(18)
  })
})
