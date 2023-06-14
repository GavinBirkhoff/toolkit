/**
 * Enumerated type representing browser names.
 * Each value corresponds to a specific browser.
 */
export enum BrowserName {
  CHROME = 'Chrome',
  FIREFOX = 'Firefox',
  EDGE = 'Edge',
  SAFARI = 'Safari',
  OPERA = 'Opera',
  UNKNOWN = 'Unknown'
}

/**
 * Gets the name of the current user's web browser.
 * @experimental
 * @returns {BrowserName} An enumerated value representing the current browser.
 *
 * @example
 * const browser: BrowserName = getBrowser();
 * console.log(`Your browser is: ${browser}`);
 *
 */
const getBrowser = (): BrowserName => {
  const ua = window.navigator.userAgent.toLowerCase()

  if (~ua.indexOf('chrome')) {
    return BrowserName.CHROME
  } else if (~ua.indexOf('firefox')) {
    return BrowserName.FIREFOX
  } else if (~ua.indexOf('edge')) {
    return BrowserName.EDGE
  } else if (~ua.indexOf('safari')) {
    return BrowserName.SAFARI
  } else if (~ua.indexOf('opera') || ~ua.indexOf('opr')) {
    return BrowserName.OPERA
  } else {
    return BrowserName.UNKNOWN
  }
}

export default getBrowser
