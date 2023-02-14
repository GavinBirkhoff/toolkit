import { isPromiseLike } from '../src'
describe('isPromiseLike', () => {
  test('null should be falsy', () => {
    expect(isPromiseLike(null)).toBeFalsy()
  })
  test('undefined should be falsy', () => {
    expect(isPromiseLike(undefined)).toBeFalsy()
  })
  test('()=>void should be falsy', () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    expect(isPromiseLike(() => {})).toBeFalsy()
  })
  test('{} should be falsy', () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    expect(isPromiseLike({})).toBeFalsy()
  })
  test('Promise should be truthy', () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const p = new Promise(() => {})
    expect(isPromiseLike(p)).toBeTruthy()
  })
})
