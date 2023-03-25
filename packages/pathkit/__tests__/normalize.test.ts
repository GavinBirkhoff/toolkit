import { normalize } from '../src'

describe('normalize', () => {
  it('normalizes basic paths', () => {
    expect(normalize('/')).toBe('/')
    expect(normalize('/foo')).toBe('/foo')
    expect(normalize('/foo/')).toBe('/foo/')
    expect(normalize('/foo//')).toBe('/foo/')
    expect(normalize('foo/')).toBe('foo/')
    expect(normalize('foo//')).toBe('foo/')
    expect(normalize('foo/bar')).toBe('foo/bar')
    expect(normalize('foo/../bar')).toBe('bar')
  })

  it('normalizes complex paths', () => {
    expect(normalize('/foo/bar/../baz')).toBe('/foo/baz')
    expect(normalize('/foo/bar/../../baz')).toBe('/baz')
    expect(normalize('/foo/bar/../../../baz')).toBe('/baz')
    expect(normalize('/foo/bar/../../../../baz')).toBe('/baz')
    expect(normalize('/foo/bar/../../../../baz/../qux')).toBe('/qux')
    expect(normalize('/foo/bar/../../../..')).toBe('/')
    expect(normalize('/foo/bar/../../../../..')).toBe('/')
  })

  it('normalizes paths with dots', () => {
    expect(normalize('/foo/bar/.')).toBe('/foo/bar')
    expect(normalize('/foo/bar/./baz')).toBe('/foo/bar/baz')
    expect(normalize('/foo/bar/baz/.')).toBe('/foo/bar/baz')
    expect(normalize('/foo/./bar')).toBe('/foo/bar')
    expect(normalize('/foo/./bar/')).toBe('/foo/bar/')
    expect(normalize('/foo/./bar/../baz')).toBe('/foo/baz')
    expect(normalize('/foo/../bar/./baz/../qux')).toBe('/bar/qux')
  })

  it('should normalize a path with ".." and "." segments', () => {
    expect(normalize('/users/john/../jane/./documents/')).toBe('/users/jane/documents/')
  })

  it('should not change a path with no "." or ".." segments', () => {
    expect(normalize('/users/john/documents/')).toBe('/users/john/documents/')
  })

  // it('should normalize a Windows path with backslashes', () => {
  //   expect(normalize('C:\\users\\john\\..\\jane\\.\\documents\\')).toBe('C:/users/jane/documents/')
  // })

  it('should normalize an empty path to root', () => {
    expect(normalize('')).toBe('/')
  })

  it('should normalize a single slash to root', () => {
    expect(normalize('/')).toBe('/')
  })

  it('should remove trailing slashes', () => {
    expect(normalize('/users/john/documents////')).toBe('/users/john/documents/')
  })

  it('should normalize a path with a mix of forward and backslashes', () => {
    expect(normalize('/users/john\\../jane\\./documents/')).toBe('/users/jane/documents/')
  })

  it('should handle an absolute path with a single trailing slash', () => {
    expect(normalize('/users/john/documents/')).toBe('/users/john/documents/')
  })

  it('should handle an absolute path with no trailing slash', () => {
    expect(normalize('/users/john/documents')).toBe('/users/john/documents')
  })

  it('should handle a relative path with a single trailing slash', () => {
    expect(normalize('users/john/documents/')).toBe('users/john/documents/')
  })

  it('should handle a relative path with no trailing slash', () => {
    expect(normalize('users/john/documents')).toBe('users/john/documents')
  })

  it('should handle a double slash as a single slash', () => {
    expect(normalize('//users/john/documents')).toBe('/users/john/documents')
  })

  // it('should handle a double backslash as a single slash on Windows', () => {
  //   expect(normalize('C:\\\\users\\john\\documents\\')).toBe('C:/users/john/documents/')
  // })
})
