/**
 * @description Disorder array order
 * @category Array
 * @param  {T[]} arr
 */
const shuffle = <T>(arr: T[]): void => {
  arr.sort(() => 0.5 - Math.random())
}

// Array.prototype.shuffle = function () {
//   const array = this
//   let m = array.length,
//     t,
//     i
//   while (m) {
//     i = Math.floor(Math.random() * m--)
//     t = array[m]
//     array[m] = array[i]
//     array[i] = t
//   }
//   return array
// }

export default shuffle
