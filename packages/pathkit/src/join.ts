/**
 * Join all given path segments together using "/" as the separator and replace any repetitive slashes with a single slash.
 * @param {...String[]} paths - One or more path segments to join.
 * @returns {String} A string representing the joined path.
 * @example
 *
 * // returns "root/dir/file.png"
 * join('root', 'dir', 'file.png');
 *
 * // returns "/root//dir/file.png"
 * join('/root/', '/dir/', 'file.png');
 *
 * @since 1.0.0
 *
 */
const join = (...paths: string[]): string => {
  return paths.join('/').replace(/\/{2,}/g, '/')
}

export default join
