/**
 * @description JS digit thousandth formatting code
 * @param value Numeric value to format
 * @param separator Thousandth sign
 * @param digitNum Keep several decimal places
 * @returns {string | number}
 */
const formatNumber2 = (value: number | string, separator: string, digitNum = 0): string | number => {
   const initV = value

   if ((value = (value = value + '').replace(/^\s*|\s*$|,*/g, '')).match(/^\d*\.?\d*$/) == null) return initV

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

   return value
}

export default formatNumber2
