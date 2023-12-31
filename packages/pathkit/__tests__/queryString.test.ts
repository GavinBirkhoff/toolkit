import { queryString } from '../src'

describe('queryString function', () => {
  it('should return an empty string for an empty object', () => {
    const result = queryString({})
    expect(result).toBe('')
  })

  it('should generate a valid query string', () => {
    const query = { name: 'John', age: 30 }
    const result = queryString(query)
    expect(result).toBe('?name=John&age=30')
  })

  it('should use a custom separator', () => {
    const query = { name: 'John', age: 30 }
    const result = queryString(query, '&')
    expect(result).toBe('&name=John&age=30')
  })
})
