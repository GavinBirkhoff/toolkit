import isAbsolute from './isAbsolute'

/**
 * Normalize a file system path by removing any unnecessary "." and ".." segments
 * and resolving any directory separators to match the host operating system.
 * @param {string} path The file system path to be normalized.
 * @returns {string} The normalized path.
 *
 * @example
 * const path = '/users/john/../jane/./documents/';
 * const normalizedPath = normalize(path); // "/users/jane/documents/"
 *
 * @since 1.0.0
 */
const normalize = (path: string): string => {
  const isAbsolutePath = isAbsolute(path)
  let trailingSlash = path.endsWith('/') ? '/' : ''
  const segments = path.split(/\/|\\/).filter((segment) => segment !== '.' && segment !== '')

  const normalizedSegments: string[] = []

  for (let i = 0; i < segments.length; i++) {
    if (
      segments[i] === '..' &&
      normalizedSegments.length > 0 &&
      normalizedSegments[normalizedSegments.length - 1] !== '..'
    ) {
      normalizedSegments.pop()
    } else if (segments[i] !== '..') {
      normalizedSegments.push(segments[i])
    }
  }

  if (isAbsolutePath) {
    if (normalizedSegments.length === 0 || normalizedSegments[0] !== '') {
      normalizedSegments.unshift('')
    }
    trailingSlash = normalizedSegments.length > 1 ? trailingSlash : ''
  } else {
    trailingSlash = normalizedSegments.length > 0 ? trailingSlash : ''
  }

  const result = normalizedSegments.join('/') + trailingSlash
  return result === '' ? '/' : result
}

export default normalize
