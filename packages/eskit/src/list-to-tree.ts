/**
 * @description: create array tree from list
 * @param {Array} list
 * @param {String|Number|null} pid
 * @return {Array}
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
