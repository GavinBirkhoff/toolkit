import { requestAnimationFrame } from '../src'

describe('requestAnimationFrame', () => {
  test('default', (done) => {
    const fn = jest.fn()
    let count = 3
    const step = function () {
      --count
      fn()
      if (count > 0) {
        requestAnimationFrame(step)
      }
    }
    requestAnimationFrame(step)
    setTimeout(() => {
      expect(fn).toBeCalledTimes(3)
      done()
    }, 60)
  })
})
