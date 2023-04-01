/**
 * Formats a number with the specified decimal separator and digit number.
 *
 * This function formats a number with the specified decimal separator and digit number. If the input value is not a valid number, this function returns the input value as a string without formatting.
 *
 * @param val - The input number to be formatted.
 * @param separator - The decimal separator to use for formatting the number.
 * @param digitNum - The number of digits to appear after the decimal point (defaults to 0).
 * @returns The formatted number as a string.
 *
 * @example
 * ```
 * const formattedNumber = formatNumber(123456.789, ',', 2)
 * console.log(formattedNumber)
 * // Output: "123,456.79"
 * ```
 */
const formatNumber = (val: number, separator: string, digitNum = 0): string => {
  let value: any = val

  if ((value = (value = value + '').replace(/^\s*|\s*$|,*/g, '')).match(/^\d*\.?\d*$/) == null) return val.toString()

  value = (digitNum as number) >= 0 ? Number(value).toFixed(digitNum) + '' : value

  let r: string[] | string = [],
    tl = value.split('.')[0],
    tr = value.split('.')[1]

  tr = typeof tr != 'undefined' ? tr : ''

  if (separator != null && separator != '') {
    while (tl.length >= 3) {
      r.push(tl.substring(tl.length - 3))

      tl = tl.substring(0, tl.length - 3)
    }

    if (tl.length > 0) r.push(tl)

    r.reverse()

    r = r.join(separator)

    return tr == '' ? r : r + '.' + tr
  }

  return value as string
}

export default formatNumber
