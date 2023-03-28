import { getCssVariable } from '../src'

describe('getCssVariable', () => {
  it('should get a CSS variable from the root element', () => {
    document.documentElement.style.setProperty('--test-var', 'red')
    expect(getCssVariable('--test-var')).toBe('red')
  })

  it('should get a CSS variable from a specific element', () => {
    const element = document.createElement('div')
    element.style.setProperty('--test-var', 'blue')
    expect(getCssVariable('--test-var', element)).toBe('blue')
  })
})
