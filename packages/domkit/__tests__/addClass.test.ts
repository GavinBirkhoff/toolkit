import { addClass, getClass } from '../src'
describe('addClass', () => {
  it('should add unique class names to the SVG Element', () => {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    svg.setAttribute('class', 'existing-class-1 existing-class-2')
    addClass(svg, 'new-class-1', 'new-class-2', 'existing-class-1', 'new-class-1')
    expect(svg.getAttribute('class')).toBe('existing-class-1 existing-class-2 new-class-1 new-class-2')
  })

  it('should add unique class names to the HTMLElement', () => {
    const div = document.createElement('div')
    div.setAttribute('class', 'existing-class-1 existing-class-2')
    addClass(div, 'new-class-1', 'new-class-2', 'existing-class-1', 'new-class-1')
    expect(getClass(div)).toBe('existing-class-1 existing-class-2 new-class-1 new-class-2')
  })
})
