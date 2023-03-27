import { getClass } from '../src'
describe('getClass', () => {
  it('should return class names on SVG Element', () => {
    const svg: SVGElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    svg.setAttribute('class', 'example-class-1 example-class-2')
    expect(getClass(svg)).toBe('example-class-1 example-class-2')
  })

  it('should return class names on HTMLElement', () => {
    const div: HTMLDivElement = document.createElement('div')
    div.setAttribute('class', 'example-class-1 example-class-2')
    expect(getClass(div)).toBe('example-class-1 example-class-2')
  })

  it('should return empty string when no classes exist on element', () => {
    const div: HTMLDivElement = document.createElement('div')
    expect(getClass(div)).toBe('')
  })

  it('should return class names for HTML elements using classList', () => {
    const div: HTMLDivElement = document.createElement('div')
    div.classList.add('example-class-1')
    div.classList.add('example-class-2')
    expect(getClass(div)).toBe('example-class-1 example-class-2')
  })
})
