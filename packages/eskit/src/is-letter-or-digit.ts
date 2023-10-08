/**
 * Check if a character is a letter or a digit.
 *
 * @param char The character to check.
 * @returns True if the character is a letter or a digit, false otherwise.
 * @example
 * ```typescript
 * const result = isLetterOrDigit('A');
 * console.log(result); // true
 * ```
 */
const isLetterOrDigit = (char: string): boolean => {
  const charCode = char.charCodeAt(0)
  return (charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || (charCode >= 48 && charCode <= 57)
}

export default isLetterOrDigit

// const letterOrDigitRegex = /^[a-zA-Z0-9]$/
// function isLetterOrDigit(char) {
//   return letterOrDigitRegex.test(char)
// }
