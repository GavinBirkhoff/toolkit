import { curry } from '../src'

describe('curry', () => {
  it('should curry a function', () => {
    const add = (a: number, b: number) => a + b
    const curriedAdd = curry(add)

    const add5 = curriedAdd(5)
    expect(add5(3)).toEqual(8)

    const add2 = curriedAdd(2)
    expect(add2(4)).toEqual(6)
  })
})
