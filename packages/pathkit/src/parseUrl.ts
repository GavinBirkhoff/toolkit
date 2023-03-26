import { hasOwnProperty } from 'ts-copilot'

/**
 * @interface UrlObject
 *
 * @property {Record<string, string|string[]>} query - Key-value pairs of the query string parameters of the URL.
 * @property {Record<string, string|string[]>} hash - Key-value pairs of the hash string parameters of the URL.
 */
interface UrlObject {
  query: Record<string, string | string[]>
  hash: Record<string, string | string[]>
}
/**
 * Parses the query or hash parameter string in the form of "key1=value1&key2=value2&..." into an object.
 *
 * @param {string} str - The query or hash parameter string to parse.
 *
 * @returns {{ [key: string]: string | string[] }} An object representing the parsed parameters.
 */
const parseQueryString = (str: string): { [key: string]: string | string[] } => {
  const result: { [key: string]: string | string[] } = {}

  if (!str) {
    return result
  }

  str.split('&').forEach((item) => {
    const [key, value] = item.split('=', 2)
    const decodedKey = decodeURIComponent(key)
    const decodedValue = decodeURIComponent(value ?? '')

    if (decodedKey && decodedValue !== undefined) {
      if (hasOwnProperty.call(result, decodedKey)) {
        result[decodedKey] = ([] as string[]).concat(result[decodedKey], decodedValue)
      } else {
        result[decodedKey] = decodedValue
      }
    }
  })

  return result
}

/**
 * Parses the query and hash parameters from a URL string.
 *
 * @param {string} url - The URL to parse.
 *
 * @returns {UrlObject} An object containing the query and hash parameters of the URL.
 *
 * @example
 *
 * // Basic usage
 * const url = 'http://example.com/path/to/page?a=1&b=2#section1';
 * const { query, hash } = parseUrl(url);
 * console.log(query); // { a: '1', b: '2' }
 * console.log(hash); // { section1: '' }
 *
 * // Query and hash without value
 * const url2 = 'http://example.com/path/to/page?a&b#c';
 * const { query: query2, hash: hash2 } = parseUrl(url2);
 * console.log(query2); // { a: '', b: '' }
 * console.log(hash2); // { c: '' }
 *
 * // Query with array value
 * const url3 = 'http://example.com/path/to/page?color=red&color=green&color=blue';
 * const { query: query3, hash: hash3 } = parseUrl(url3);
 * console.log(query3); // { color: ['red', 'green', 'blue'] }
 * console.log(hash3); // {}
 */
const parseUrl = (url: string): UrlObject => {
  // eslint-disable-next-line no-useless-escape
  const [baseUrl, queryStr, hashStr] = url.split(/[\?#]/)

  return {
    query: parseQueryString(queryStr),
    hash: parseQueryString(hashStr)
  }
}

export default parseUrl
