/**
 * Formats a given number as a string with a currency symbol.
 *
 * @param money - The number to be formatted.
 * @param currencySymbol - The currency symbol to use. Defaults to '$'.
 * @returns A string with the formatted currency symbol and number.
 *
 * @example
 *
 * ```typescript
 * formatMoney(10) // "$10.00"
 * formatMoney(1000000, "£") // "£1,000,000.00"
 * ```
 * @since 1.0.0
 */
const formatMoney = (money: number, currencySymbol = '$'): string => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  })
  return formatter.format(money).replace(/^\$+/, currencySymbol)
}

export default formatMoney
