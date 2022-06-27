/**
 * @description Multiplication operation
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
const multiply = (a: number, b: number): number => {
   let m = 0
   const s1 = a.toString()
   const s2 = b.toString()
   try {
      m += s1.split('.')[1].length
      // eslint-disable-next-line no-empty
   } catch (e) {}
   try {
      m += s2.split('.')[1].length
      // eslint-disable-next-line no-empty
   } catch (e) {}
   return (Number(s1.replace('.', '')) * Number(s2.replace('.', ''))) / Math.pow(10, m)
}

export default multiply
