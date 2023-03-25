import { isAbsolute } from '../src'

// Use Jest to run unit tests
describe('isAbsolute', () => {
  it('should return true for absolute paths', () => {
    expect(isAbsolute('/')).toBe(true)
    expect(isAbsolute('/path/to/file')).toBe(true)
    expect(isAbsolute('/user/local/bin')).toBe(true)
    expect(isAbsolute('C:\\path\\to\\file')).toBe(true)
    expect(isAbsolute('\\path\\to\\file')).toBe(true)
    expect(isAbsolute('https://example.com')).toBe(true)
    expect(isAbsolute('ftp://example.com')).toBe(true)
  })

  it('should return false for relative paths', () => {
    expect(isAbsolute('path/to/file')).toBe(false)
    expect(isAbsolute('./file')).toBe(false)
    expect(isAbsolute('../file')).toBe(false)
    expect(isAbsolute('file.js')).toBe(false)
  })
})
