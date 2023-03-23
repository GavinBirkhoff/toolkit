import { throttle } from '../src'

describe('throttle', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  it('should only call the function once within the given delay', () => {
    const fn = jest.fn()
    const throttledFn = throttle(fn, 100)

    throttledFn()
    throttledFn()
    throttledFn()

    expect(fn).toHaveBeenCalledTimes(0)

    jest.advanceTimersByTime(50)

    throttledFn()

    expect(fn).toHaveBeenCalledTimes(1)

    jest.advanceTimersByTime(50)

    expect(fn).toHaveBeenCalledTimes(2)

    throttledFn()

    expect(fn).toHaveBeenCalledTimes(2)

    jest.advanceTimersByTime(50)

    throttledFn()

    expect(fn).toHaveBeenCalledTimes(2)

    jest.advanceTimersByTime(50)

    expect(fn).toHaveBeenCalledTimes(3)

    throttledFn()

    expect(fn).toHaveBeenCalledTimes(3)
  })

  it('should call the function immediately if leading option is set to true', () => {
    const fn = jest.fn()
    const throttledFn = throttle(fn, 100, { leading: true })

    throttledFn()

    expect(fn).toHaveBeenCalledTimes(1)

    jest.advanceTimersByTime(50)

    throttledFn()

    expect(fn).toHaveBeenCalledTimes(1)

    jest.advanceTimersByTime(50)

    throttledFn()

    expect(fn).toHaveBeenCalledTimes(2)
  })

  it('should not call the function at the end if trailing option is set to false', () => {
    const fn = jest.fn()
    const throttledFn = throttle(fn, 100, { trailing: false })

    throttledFn()
    throttledFn()
    throttledFn()

    expect(fn).toHaveBeenCalledTimes(0)

    jest.advanceTimersByTime(50)

    throttledFn()

    expect(fn).toHaveBeenCalledTimes(0)

    jest.advanceTimersByTime(50)

    throttledFn()

    expect(fn).toHaveBeenCalledTimes(0)

    jest.advanceTimersByTime(100)

    expect(fn).toHaveBeenCalledTimes(0)
  })
})
