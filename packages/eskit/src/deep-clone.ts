import hasOwnProperty from './hasOwnProperty'

/**
 * @description deep clone obj
 * @param obj
 * @returns obj
 */
const deepClone = <T>(obj: T): Partial<T> => {
   const objClone: any = Array.isArray(obj) ? [] : {}
   if (obj && typeof obj === 'object') {
      for (const key in obj) {
         if (hasOwnProperty.call(obj, key)) {
            if (obj[key] && typeof obj[key] === 'object') {
               objClone[key] = deepClone(obj[key])
            } else {
               objClone[key] = obj[key]
            }
         }
      }
   }
   return objClone
}

export default deepClone
