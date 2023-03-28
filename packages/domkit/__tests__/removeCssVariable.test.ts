import { removeCssVariable } from '../src'

describe('removeCssVariable', () => {
  beforeEach(() => {
    document.documentElement.style.setProperty('--test-var', 'red')
  })

  afterEach(() => {
    document.documentElement.style.removeProperty('--test-var')
  })

  it('should remove a CSS variable from the root element', () => {
    removeCssVariable('--test-var')
    expect(document.documentElement.style.getPropertyValue('--test-var')).toBe('')
  })

  it('should remove a CSS variable from a specific element', () => {
    const element = document.createElement('div')
    element.style.setProperty('--test-var', 'blue')
    removeCssVariable('--test-var', element)
    expect(element.style.getPropertyValue('--test-var')).toBe('')
  })
})
