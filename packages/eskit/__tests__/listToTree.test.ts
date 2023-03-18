import { listToTree } from '../src'
describe('listToTree', () => {
  test('list to tree', () => {
    const arr = [
      { id: 1, label: 'a1', pid: null },
      { id: 2, label: 'b1', pid: 1 },
      { id: 3, label: 'b2', pid: 1 }
    ]
    const arrTree = [
      {
        children: [
          { children: [], id: 2, label: 'b1', pid: 1 },
          { children: [], id: 3, label: 'b2', pid: 1 }
        ],
        id: 1,
        label: 'a1',
        pid: null
      }
    ]
    const newTree = listToTree(arr)
    expect(newTree).toEqual(arrTree)
  })
})
