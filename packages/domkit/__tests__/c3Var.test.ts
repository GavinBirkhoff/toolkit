import { setC3Var, getC3Var, delC3Var } from '../src'

describe('c3Var', () => {
  test('default', () => {
    const key = '--theme'
    const value = '#wihte'
    setC3Var(key, value)
    expect(getC3Var(key)).toBe(value)
    delC3Var(key)
    expect(getC3Var(key)).toBe('')
  })
})
