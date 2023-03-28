import { requestAnimationFrame } from '../src'

describe('requestAnimationFrame', () => {
  test('should call window.requestAnimationFrame if it exists', () => {
    const mockFn = jest.fn()
    window.requestAnimationFrame = mockFn
    requestAnimationFrame(() => {})
    expect(mockFn).toHaveBeenCalled()
  })

  test('should fallback to setTimeout if no requestAnimationFrame method is available', () => {
    const mockFn = jest.fn()
    // @ts-ignore
    window.requestAnimationFrame = undefined
    // @ts-ignore
    window.webkitRequestAnimationFrame = undefined
    // @ts-ignore
    window.mozRequestAnimationFrame = undefined
    // @ts-ignore
    window.msRequestAnimationFrame = undefined
    jest.spyOn(window, 'setTimeout').mockReturnValue(1 as any)

    requestAnimationFrame(mockFn)
    expect(window.setTimeout).toHaveBeenCalled()
  })
})
