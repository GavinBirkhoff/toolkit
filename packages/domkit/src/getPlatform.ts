/**
 * Get the platform string of the user's operating system.
 * @returns {Platform} The platform string.
 * @example
 * const platform = getPlatform();
 * console.log(platform); // Outputs: Windows / MacOS / Linux / Android / iOS / Unknown
 */
type Platform = 'Windows' | 'MacOS' | 'Linux' | 'Android' | 'iOS' | 'Unknown'
type PlatformKeywords = {
  win: Platform
  mac: Platform
  linux: Platform
  android: Platform
  iphone: Platform
  ipad: Platform
  ipod: Platform
}
/**
 * Gets the platform string of the user's operating system.
 * @returns {Platform} The platform string.
 */
const getPlatform = (): Platform => {
  // Get the user agent string and convert it to lowercase.
  const userAgent = window.navigator.userAgent.toLowerCase()
  // Define an object of platform keywords and their corresponding platform strings.
  const platformKeywords: PlatformKeywords = {
    win: 'Windows',
    mac: 'MacOS',
    linux: 'Linux',
    android: 'Android',
    iphone: 'iOS',
    ipad: 'iOS',
    ipod: 'iOS'
  }

  // Find the first platform keyword that appears in the user agent string.
  const platformKeyword = Object.keys(platformKeywords).find((keyword) => userAgent.indexOf(keyword) !== -1)

  // Return the corresponding platform string if a keyword is found, otherwise return 'Unknown'.
  return platformKeyword ? platformKeywords[platformKeyword as keyof PlatformKeywords] : 'Unknown'
}

export default getPlatform
