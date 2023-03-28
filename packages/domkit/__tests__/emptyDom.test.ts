import { emptyDom } from '../src'

describe('emptyDom', () => {
  let container: HTMLElement

  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })

  afterEach(() => {
    document.body.removeChild(container)
  })

  test('removes all child nodes from the specified element', () => {
    const child1 = document.createElement('span')
    const child2 = document.createTextNode('Hello')
    const child3 = document.createElement('button')
    container.appendChild(child1)
    container.appendChild(child2)
    container.appendChild(child3)
    expect(container.childNodes.length).toBe(3)
    emptyDom(container)
    expect(container.childNodes.length).toBe(0)
  })

  test('does not throw an error when called with an element with no child nodes', () => {
    expect(() => emptyDom(container)).not.toThrow()
  })

  test('updates the text content of the element', () => {
    container.appendChild(document.createTextNode('Hello, world!'))
    expect(container.textContent).toBe('Hello, world!')
    emptyDom(container)
    expect(container.textContent).toBe('')
  })
})
