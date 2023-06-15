import { getPlatform } from '../src'

describe('getPlatform', () => {
  const Platform = {
    win: 'Windows',
    mac: 'MacOS',
    linux: 'Linux',
    android: 'Android',
    iphone: 'iOS',
    ipad: 'iOS',
    ipod: 'iOS'
  }
  let userAgentDescriptor: PropertyDescriptor | undefined
  beforeAll(() => {
    userAgentDescriptor = Object.getOwnPropertyDescriptor(window.navigator, 'userAgent')
  })

  afterAll(() => {
    if (userAgentDescriptor) {
      Object.defineProperty(window.navigator, 'userAgent', userAgentDescriptor)
    }
  })
  test('should return "Windows" for Windows platform', () => {
    Object.defineProperty(window.navigator, 'userAgent', {
      value: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
      writable: true
    })
    const result = getPlatform()
    expect(result).toBe(Platform.win)
  })

  test('should return "MacOS" for macOS platform', () => {
    Object.defineProperty(window.navigator, 'userAgent', {
      value: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)',
      writable: true
    })
    const result = getPlatform()
    expect(result).toBe(Platform.mac)
  })

  test('should return "Linux" for Linux platform', () => {
    Object.defineProperty(window.navigator, 'userAgent', { value: 'Mozilla/5.0 (Linux x86_64)', writable: true })
    const result = getPlatform()
    expect(result).toBe(Platform.linux)
  })

  test('should return "Android" for Android platform', () => {
    Object.defineProperty(window.navigator, 'userAgent', {
      value: 'Mozilla/5.0 (Android; Mobile; rv:40.0) Gecko/40.0 Firefox/40.0',
      writable: true
    })
    const result = getPlatform()
    expect(result).toBe(Platform.android)
  })

  test('should return "iOS" for iOS platform (iPhone)', () => {
    Object.defineProperty(window.navigator, 'userAgent', {
      value: 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X)',
      writable: true
    })
    const result = getPlatform()
    expect(result).toBe('iOS')
  })

  test('should return "iOS" for iOS platform (iPad)', () => {
    Object.defineProperty(window.navigator, 'userAgent', {
      value: 'Mozilla/5.0 (iPad; CPU OS 15_0 like Mac OS X)',
      writable: true
    })
    const result = getPlatform()
    expect(result).toBe('iOS')
  })

  test('should return "iOS" for iOS platform (iPod)', () => {
    Object.defineProperty(window.navigator, 'userAgent', {
      value: 'Mozilla/5.0 (iPod; CPU iPhone OS 15_0 like Mac OS X)',
      writable: true
    })
    const result = getPlatform()
    expect(result).toBe('iOS')
  })

  test('should return "Unknown" for unknown platform', () => {
    Object.defineProperty(window.navigator, 'userAgent', { value: 'Some random user agent string', writable: true })
    const result = getPlatform()
    expect(result).toBe('Unknown')
  })
})
