import { loadScript } from '../src'

describe('loadScript', () => {
  test('should load script and call the callback', () => {
    const callback = jest.fn()
    loadScript('https://www.unpkg.com/react@16.7.0/umd/react.production.min.js', callback)

    expect(callback).toBeCalledWith(undefined)
  })

  test('should load script with options and call the callback', () => {
    const callback = jest.fn()
    const options = {
      url: 'https://www.unpkg.com/react@16.7.0/umd/react.production.min.js',
      async: true,
      cache: true,
      crossorigin: 'anonymous',
      defer: false
    }

    loadScript(options, callback)

    expect(callback).toBeCalledWith(undefined)
  })

  test('should handle script load error and call the callback with error', () => {
    const callback = jest.fn()
    loadScript('https://example.com/non-existent-script.js', callback)

    expect(callback).toHaveBeenCalledWith(expect.any(Error))
  })
})
