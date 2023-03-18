import { isEqual } from '../src'
describe('isEqual', () => {
  test('default', () => {
    const arrTree1 = [
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

    const arrTree2 = [
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
    expect(isEqual(arrTree1, arrTree2)).toBeTruthy()
  })
})
