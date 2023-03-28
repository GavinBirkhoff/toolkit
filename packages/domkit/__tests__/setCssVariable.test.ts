import { setCssVariable } from '../src'

describe('setCssVariable', () => {
  it('should set a CSS variable on the root element', () => {
    setCssVariable('--test-var', 'red')
    expect(document.documentElement.style.getPropertyValue('--test-var')).toBe('red')
  })

  it('should set a CSS variable on a specific element', () => {
    const element = document.createElement('div')
    setCssVariable('--test-var', 'blue', element)
    expect(element.style.getPropertyValue('--test-var')).toBe('blue')
  })
})
