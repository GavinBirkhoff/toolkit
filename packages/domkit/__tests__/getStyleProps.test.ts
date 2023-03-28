import { getStyleProps } from '../src'

describe('getStyleProps', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="test-element" style="color: red; font-size: 16px;"></div>
    `
  })

  test('should return all style properties', () => {
    const element = document.getElementById('test-element') as HTMLElement
    const styleProps = getStyleProps(element)

    expect(styleProps).toEqual({
      'color': 'red',
      'font-size': '16px',
      'display': 'block',
      'visibility': 'visible'
    })
  })

  test('should return the value of a specific style property', () => {
    const element = document.getElementById('test-element') as HTMLElement
    const color = getStyleProps(element, 'color')

    expect(color).toBe('red')
  })

  test('should return an empty object if the element does not have a style', () => {
    const element = document.createElement('div')
    const styleProps = getStyleProps(element)

    expect(styleProps).toEqual({
      display: 'block',
      visibility: 'visible'
    })
  })

  test('should return an empty string if the specified style property does not exist', () => {
    const element = document.getElementById('test-element') as HTMLElement
    const value = getStyleProps(element, 'border')

    expect(value).toBe('')
  })
})
