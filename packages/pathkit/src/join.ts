/**
 * Combines an array of path segments into a single path string, with forward slashes (/) as separators.
 *
 * @since 1.0.0
 *
 * @param paths - An array of path segments to join.
 * @returns A combined path string.
 *
 * @example
 * const path = join('foo', 'bar', 'baz'); // path == 'foo/bar/baz'
 * const path2 = join('foo/', '/bar/', '/baz/'); // path2 == 'foo/bar/baz'
 */
const join = (...paths: string[]): string => {
  return paths.join('/').replace(/\/{2,}/g, '/')
}

export default join
