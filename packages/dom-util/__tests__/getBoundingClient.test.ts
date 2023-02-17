import { getBoundingClient, createDom, setStyleProps } from '../src'
describe('getBoundingClient', () => {
  test('default', () => {
    const div = createDom({ tagName: 'div', container: document.body })
    setStyleProps(div, { width: '200px', padding: '100px', margin: '100px' })
    const div2 = createDom({ tagName: 'div', container: div })
    setStyleProps(div2, { width: '200px', padding: '100px' })
    //TODO I think it's not computer then the result is 0
    expect(getBoundingClient(div2)).toEqual({ x: 0, y: 0 })
  })
})
// gavin
