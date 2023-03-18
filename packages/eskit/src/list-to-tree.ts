/**
 * Create array tree from list
 * @param {Array} list
 * @param {PidType} pid
 * @return {Array}
 * @since 1.0.0
 * @example
 * // returns tree
 * listToTree(list)
 * @todo Optimization algorithm
 */
type PidType = number | string | null
interface IItem<T> {
  id: number | string
  pid: PidType
  children?: T[]
}
const listToTree = <T extends IItem<T>>(list: T[], pid = null as PidType): T[] => {
  return list
    .filter((item: T) => item.pid === pid)
    .map((item: T) => ({
      ...item,
      children: listToTree(list, item.id)
    }))
}
export default listToTree
