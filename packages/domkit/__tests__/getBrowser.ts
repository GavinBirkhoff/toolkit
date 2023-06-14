import { getBrowser } from '../src'

describe('getBrowser', () => {
  const BrowserName = {
    CHROME: 'Chrome',
    FIREFOX: 'Firefox',
    EDGE: 'Edge',
    SAFARI: 'Safari',
    OPERA: 'Opera',
    UNKNOWN: 'Unknown'
  }
  it('should return BrowserName.CHROME for Chrome browser', () => {
    const userAgent =
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36'
    Object.defineProperty(window.navigator, 'userAgent', { value: userAgent })

    const result = getBrowser()
    expect(result).toBe(BrowserName.CHROME)
  })

  it('should return BrowserName.FIREFOX for Firefox browser', () => {
    const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0'
    Object.defineProperty(window.navigator, 'userAgent', { value: userAgent })

    const result = getBrowser()
    expect(result).toBe(BrowserName.FIREFOX)
  })

  it('should return BrowserName.EDGE for Edge browser', () => {
    const userAgent =
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36 Edg/93.0.961.52'
    Object.defineProperty(window.navigator, 'userAgent', { value: userAgent })

    const result = getBrowser()
    expect(result).toBe(BrowserName.EDGE)
  })

  it('should return BrowserName.SAFARI for Safari browser', () => {
    const userAgent =
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Version/13.1.2 Safari/537.36'
    Object.defineProperty(window.navigator, 'userAgent', { value: userAgent })

    const result = getBrowser()
    expect(result).toBe(BrowserName.SAFARI)
  })

  it('should return BrowserName.OPERA for Opera browser', () => {
    const userAgent =
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36 OPR/80.0.4170.72'
    Object.defineProperty(window.navigator, 'userAgent', { value: userAgent })

    const result = getBrowser()
    expect(result).toBe(BrowserName.OPERA)
  })

  it('should return BrowserName.UNKNOWN for unknown browser', () => {
    const userAgent = 'Some random user agent string'
    Object.defineProperty(window.navigator, 'userAgent', { value: userAgent })

    const result = getBrowser()
    expect(result).toBe(BrowserName.UNKNOWN)
  })
})
