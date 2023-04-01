import { treeToList } from '../src'
describe('treeToList', () => {
  interface IItem<T> {
    children?: T[]
  }

  class Item implements IItem<Item> {
    constructor(public value: string, public children?: Item[]) {}
  }

  it('should flatten a tree into a list', () => {
    const tree = [
      new Item('a', [new Item('b', [new Item('d')]), new Item('c', [new Item('e'), new Item('f')])]),
      new Item('g')
    ]

    const expected = [
      new Item('d'),
      new Item('b'),
      new Item('e'),
      new Item('f'),
      new Item('c'),
      new Item('a'),
      new Item('g')
    ]

    const result = treeToList(tree)

    expect(result).toEqual(expected)
  })

  it('should handle an empty tree', () => {
    const tree: Item[] = []
    const result = treeToList(tree)
    expect(result).toEqual([])
  })

  it('should handle a tree with a single node', () => {
    const tree = [new Item('a')]
    const result = treeToList(tree)
    expect(result).toEqual(tree)
  })
})
