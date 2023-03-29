import { removeEvent } from '../src'

describe('removeEvent', () => {
  it('removes an event listener from an element', () => {
    // Create a new button element
    const button = document.createElement('button')

    // Add a click event listener to the button
    const handleClick = jest.fn()
    button.addEventListener('click', handleClick)

    // Trigger the click event
    button.click()
    expect(handleClick).toHaveBeenCalledTimes(1)

    // Remove the click event listener
    removeEvent(button, 'click', handleClick)

    // Reset the mock function
    handleClick.mockReset()

    // Trigger the click event again
    button.click()
    expect(handleClick).toHaveBeenCalledTimes(0)
  })
})
