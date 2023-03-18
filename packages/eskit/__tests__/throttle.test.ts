import { throttle } from '../src'
describe('throttle', () => {
  test('default', (done) => {
    const fn = jest.fn()
    const throttleFn = throttle(fn, 200, 1)
    const every = setInterval(() => {
      throttleFn()
    }, 100)
    setTimeout(() => {
      clearInterval(every)
      expect(fn).toBeCalledTimes(3)
      done()
    }, 601)
  })
})
