/**
 * @description JS digit thousandth formatting code
 * @param {number} value Numeric value to format
 * @param {string} separator Thousandth sign
 * @param {number} digitNum Keep several decimal places
 * @returns {string}
 * @example
 * formatNumber(1000, ',', 2) => '1,000.00'
 * formatNumber(10, ',', 1) => '10.0'
 * formatNumber(10, ',') => '10'
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
