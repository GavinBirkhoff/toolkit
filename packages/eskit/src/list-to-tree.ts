/**
 * Type for a valid value of a PID.
 */
type PidType = number | string | null

/**
 * Interface representing an item in a list that can be converted to a tree.
 */
interface IItem<T> {
  id: number | string
  pid: PidType
  children?: T[]
}
/**
 * Converts a flat list of items to a tree structure.
 *
 * @typeParam T - The type of the items in the list.
 * @param list - The list of items to convert.
 * @param pid - The parent ID to start the conversion from. Defaults to null.
 * @returns The resulting tree structure.
 */
const listToTree = <T extends IItem<T>>(list: T[], pid = null as PidType): T[] => {
  return list
    .filter((item: T) => item.pid === pid)
    .map((item: T) => ({
      ...item,
      children: listToTree(list, item.id)
    }))
}
export default listToTree
