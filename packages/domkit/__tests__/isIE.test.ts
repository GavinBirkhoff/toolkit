import { isIE } from '../src'

describe('isIE', () => {
  let userAgentDescriptor: PropertyDescriptor | undefined
  beforeAll(() => {
    userAgentDescriptor = Object.getOwnPropertyDescriptor(window.navigator, 'userAgent')
  })

  afterEach(() => {
    if (userAgentDescriptor) {
      Object.defineProperty(window.navigator, 'userAgent', userAgentDescriptor)
    }
  })

  it('should return true if the browser is Internet Explorer', () => {
    const userAgentValue = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/6.0)'
    Object.defineProperty(window.navigator, 'userAgent', {
      value: userAgentValue,
      writable: true
    })

    expect(isIE()).toBe(true)
  })

  it('should return false if the browser is not Internet Explorer', () => {
    const userAgentValue =
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36'
    Object.defineProperty(window.navigator, 'userAgent', {
      value: userAgentValue,
      writable: true
    })

    expect(isIE()).toBe(false)
  })
})
