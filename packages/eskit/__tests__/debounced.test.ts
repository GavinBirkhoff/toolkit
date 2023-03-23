import { debounced } from '../src'

describe('debounced()', () => {
  jest.useFakeTimers() // 手动模拟计时器

  it('should call the function with the latest arguments after the specified delay time', () => {
    const mockFn = jest.fn()
    const debouncedFn = debounced(mockFn, 100)

    debouncedFn('foo')
    jest.advanceTimersByTime(50)
    debouncedFn('bar')
    jest.advanceTimersByTime(50)

    // 确保已等待延迟时间
    expect(mockFn).not.toBeCalled()
    jest.advanceTimersByTime(100)

    // 确保函数被调用并传递最后一组参数
    expect(mockFn).toBeCalledWith('bar')
  })

  it('should execute the function immediately on the first call when the "immediate" parameter is true', () => {
    const mockFn = jest.fn()
    const debouncedFn = debounced(mockFn, 100, true)

    debouncedFn('foo')

    // 确保函数被立即调用
    expect(mockFn).toBeCalledWith('foo')
  })

  it('should cancel the debouncing when "cancel()" is called', () => {
    const mockFn = jest.fn()
    const debouncedFn = debounced(mockFn, 100)

    debouncedFn('foo')
    debouncedFn.cancel()
    jest.advanceTimersByTime(100)

    // 确保函数未被调用
    expect(mockFn).not.toBeCalled()
  })
})
