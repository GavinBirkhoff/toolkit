import { debounce } from '../../index'

describe('debounce', () => {
  test('default', (done) => {
    const fn = jest.fn()
    const debounceFn = debounce(fn, 30)
    debounceFn()
    debounceFn()
    debounceFn()
    expect(fn).not.toBeCalled()
    setTimeout(() => {
      expect(fn).toBeCalledTimes(1)
      done()
    }, 40)
  })

  test('immediate', (done) => {
    const fn = jest.fn()
    const debounceFn = debounce(fn, 30, true)
    debounceFn()
    debounceFn()
    debounceFn()
    expect(fn).toBeCalledTimes(1)
    setTimeout(() => {
      expect(fn).toBeCalledTimes(1)
      done()
    }, 40)
  })
})
