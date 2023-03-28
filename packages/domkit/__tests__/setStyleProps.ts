import { setStyleProps, getStyleProps } from '../src'

describe('setStyleProps function', () => {
  test('sets given style properties of an element', () => {
    document.body.innerHTML = `<div id="myElement"></div>`
    const el = document.getElementById('myElement') as HTMLElement

    setStyleProps(el, { color: 'red', fontSize: '14px', theme: 'light' })
    const styles = getStyleProps(el) as any
    expect(styles.color).toBe('red')
    expect(styles['font-size']).toBe('14px')
    expect(styles['--theme']).toBe('light')
  })

  test('does nothing if no element or empty style properties', () => {
    document.body.innerHTML = `<div id="myElement"></div>`
    const el = document.getElementById('myElement') as HTMLElement
    const { style } = el // Backup the actual style object

    // Run the function with empty styles
    setStyleProps(el, {})

    // Ensure it doesn't change anything
    expect(el.style).toEqual(style)

    // Run the function with null element
    setStyleProps(null, { color: 'red' })

    // Ensure it doesn't change anything
    expect(el.style).toEqual(style)
  })
})
