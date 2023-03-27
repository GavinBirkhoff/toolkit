import { setClass } from '../src'

import { JSDOM } from 'jsdom'

describe('setClass', () => {
  let dom: JSDOM
  let el: HTMLElement | SVGElement

  beforeEach(() => {
    dom = new JSDOM('<html><body></body></html>')
    el = dom.window.document.createElement('div')
  })

  afterEach(() => {
    dom.window.document.body.innerHTML = ''
    dom.window.close()
  })

  it('should set the class attribute for an HTML element', () => {
    setClass(el, 'my-class')
    expect(el.getAttribute('class')).toBe('my-class')
  })

  it('should set the class attribute for an SVG element', () => {
    el = dom.window.document.createElementNS('http://www.w3.org/2000/svg', 'circle')
    setClass(el, 'my-class')
    expect(el.getAttribute('class')).toBe('my-class')
  })

  it('should set the className property for an HTML element', () => {
    setClass(el, 'my-class')
    expect(el.classList.contains('my-class')).toBe(true)
  })

  it('should set the className property for an SVG element', () => {
    el = dom.window.document.createElementNS('http://www.w3.org/2000/svg', 'circle')
    setClass(el, 'my-class')
    expect(el.classList.contains('my-class')).toBe(true)
  })
})
