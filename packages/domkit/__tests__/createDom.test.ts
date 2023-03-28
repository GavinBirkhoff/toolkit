import { createDom } from '../src'

describe('createDom', () => {
  test('should create a div element with no attributes', () => {
    const div = createDom()
    expect(div.tagName).toBe('DIV')
  })

  test('should create an element with a custom tag name', () => {
    const section = createDom({ tagName: 'section' })
    expect(section.tagName).toBe('SECTION')
  })

  test('should create an element with some text content', () => {
    const span = createDom({ tagName: 'span', node: 'Hello, world!' })
    expect(span.textContent).toBe('Hello, world!')
  })

  test('should create an element and append it to a container', () => {
    const container = document.createElement('div')
    const p = createDom({ tagName: 'p', container })
    expect(container.children.length).toBe(1)
    expect(container.children[0]).toBe(p)
  })

  test('should create an element and append another element to it', () => {
    const a = document.createElement('a')
    const li = createDom({ tagName: 'li', node: a })
    expect(li.children.length).toBe(1)
    expect(li.children[0]).toBe(a)
  })

  test('should return the correct element type based on tag name', () => {
    const div = createDom()
    expect(div.tagName).toBe('DIV')
    const span = createDom({ tagName: 'span' })
    expect(span.tagName).toBe('SPAN')
    const h1 = createDom({ tagName: 'h1' })
    expect(h1.tagName).toBe('H1')
    const section = createDom({ tagName: 'section' })
    expect(section.tagName).toBe('SECTION')
  })
})
