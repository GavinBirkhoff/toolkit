import { emptyDom } from '../src'
describe('emptyDom', () => {
  test('default', () => {
    const parentNode = document.createElement('div')
    const childNode1 = document.createElement('p')
    const childNode2 = document.createElement('p')
    const textNode1 = document.createTextNode('hell')
    childNode1.appendChild(textNode1)
    parentNode.appendChild(childNode1)
    parentNode.appendChild(childNode2)
    expect(parentNode.innerHTML).toBe('<p>hell</p><p></p>')
    emptyDom(parentNode)
    expect(parentNode.innerHTML).toBe('')
  })
})
