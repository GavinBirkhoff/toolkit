import { addEvent } from '../src'

describe('addEvent', () => {
  test('should add an event listener', () => {
    const div = document.createElement('div')
    const callback = jest.fn()
    addEvent(div, 'click', callback)
    div.dispatchEvent(new MouseEvent('click'))
    expect(callback).toHaveBeenCalled()
  })

  test('should remove an event listener', () => {
    const div = document.createElement('div')
    const callback = jest.fn()
    const removeListener = addEvent(div, 'click', callback)
    removeListener?.()
    div.dispatchEvent(new MouseEvent('click'))
    expect(callback).not.toHaveBeenCalled()
  })
})
