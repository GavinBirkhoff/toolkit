import { getTextPixelWidth } from '../src'

describe('getTextPixelWidth', () => {
  // it('should return the pixel width of the text', () => {
  //   const text = 'Hello, world!'
  //   const options = { fontSize: 16, fontFamily: 'Arial' }
  //   const pixelWidth = getTextPixelWidth(text, options)
  //   expect(pixelWidth).toBeGreaterThan(0)
  // })

  it('should handle missing 2D rendering context', () => {
    const text = 'Hello, world!'
    const options = { fontSize: 16, fontFamily: 'Arial' }

    // Mock the getContext method of the canvas element to return null
    const getContextMock = jest.spyOn(document.createElement('canvas'), 'getContext').mockReturnValue(null)

    expect(() => getTextPixelWidth(text, options)).toThrow('Failed to create 2D rendering context')

    // Restore the original implementation of the getContext method
    getContextMock.mockRestore()
  })
})
