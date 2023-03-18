/**
 * Tree to array
 * @param {Array} tree
 * @param {Array} newArr
 * @return {Array} newArr
 * @since 1.0.0
 * @example
 * // returns newTree
 * treeToList<any>(arrTree)
 * @todo Optimize Algorithm
 */

interface IItem<T> {
  // [key: string]: any
  children?: T[]
}

const treeToList = <T extends IItem<T>>(tree: T[], newArr = [] as T[]): T[] => {
  tree.forEach((item: T) => {
    const { children } = item
    if (children) {
      delete item.children

      if (children.length) {
        newArr.push(item)
        return treeToList(children, newArr)
      }
    }
    newArr.push(item)
  })
  return newArr
}

export default treeToList
