import { cancelAnimationFrame } from '../src'

describe('cancelAnimationFrame', () => {
  it('should call window.cancelAnimationFrame if available', () => {
    const mockCancelAnimationFrame = jest.fn()
    window.cancelAnimationFrame = mockCancelAnimationFrame

    cancelAnimationFrame(123)

    expect(mockCancelAnimationFrame).toBeCalledWith(123)
  })
})
