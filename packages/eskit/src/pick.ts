import each from './each'

/**
 * Creates an object composed of the picked `obj` properties.
 *
 * @example
 *
 * const object = { 'a': 1, 'b': '2', 'c': 3 };
 * pick(object, 'a', 'c');
 * // => { 'a': 1, 'c': 3 }
 *
 * @param obj - The source object.
 * @param keys - The property keys to pick.
 * @returns The new object.
 */
const pick = <T, K extends keyof T>(obj: T, ...keys: K[]): Pick<T, K> => {
  const newObj = {} as Pick<T, K>
  each(keys, (key) => {
    newObj[key] = obj[key]
  })
  return newObj
}

export default pick
