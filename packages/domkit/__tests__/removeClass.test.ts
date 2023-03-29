import { removeClass } from '../src'

describe('removeClass', () => {
  it("removes the class from an element's className", () => {
    // Arrange
    const div = document.createElement('div')
    div.className = 'btn active'

    // Act
    removeClass(div, 'active')

    // Assert
    expect(div.className).toBe('btn')
  })

  it("removes the class from an element's classList", () => {
    // Arrange
    const div = document.createElement('div')
    div.classList.add('btn', 'active')

    // Act
    removeClass(div, 'active')

    // Assert
    expect(div.classList.contains('active')).toBe(false)
    expect(div.classList.contains('btn')).toBe(true)
  })

  it('does not remove anything if the element is null', () => {
    // Arrange
    const div = null

    // Act
    removeClass(div as any, 'active')

    // Assert
    expect(div).toBeNull()
  })

  it('does not remove anything if the class name is empty', () => {
    // Arrange
    const div = document.createElement('div')

    // Act
    removeClass(div, '')

    // Assert
    expect(div.className).toBe('')
  })
})
