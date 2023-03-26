import { parseUrl } from '../src'

describe('parseUrl', () => {
  test('Basic usage', () => {
    const url = 'http://example.com/path/to/page?a=1&b=2#section1'
    const { query, hash } = parseUrl(url)
    expect(query).toEqual({ a: '1', b: '2' })
    expect(hash).toEqual({ section1: '' })
  })

  test('Query and hash without value', () => {
    const url = 'http://example.com/path/to/page?a&b#c'
    const { query, hash } = parseUrl(url)
    expect(query).toEqual({ a: '', b: '' })
    expect(hash).toEqual({ c: '' })
  })

  test('Query with array value', () => {
    const url = 'http://example.com/path/to/page?color=red&color=green&color=blue'
    const { query, hash } = parseUrl(url)
    expect(query).toEqual({ color: ['red', 'green', 'blue'] })
    expect(hash).toEqual({})
  })

  test('No query or hash', () => {
    const url = 'http://example.com/path/to/page'
    const { query, hash } = parseUrl(url)
    expect(query).toEqual({})
    expect(hash).toEqual({})
  })
})
