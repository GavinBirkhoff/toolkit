/**
 * Determine whether the given path string is an absolute path.
 * @param {string} path - The path string to be determined.
 * @returns {boolean} - True if it's an absolute path, false otherwise.
 * @example
 * isAbsolute('/')      // true
 * isAbsolute('/path')  // true
 * isAbsolute('C:\\path')  // true
 * isAbsolute('\\path')  // true
 * isAbsolute('https://example.com')   // true
 * isAbsolute('ftp://example.com')     // true
 * isAbsolute('relative/path')  // false
 */
function isAbsolute(path: string): boolean {
  return (
    path.startsWith('/') || // Unix/Linux root directory absolute path
    path.match(/^([a-zA-Z]:)?(\\|\/)/) !== null || // Windows drive letter absolute path
    // eslint-disable-next-line no-useless-escape
    /^[a-z0-9]+\:\/\//i.test(path) // URL absolute path regex
  )
}
export default isAbsolute
