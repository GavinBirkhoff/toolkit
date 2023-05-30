import { getScrollPosition } from '../src'

describe('getScrollPosition', () => {
  beforeAll(() => {
    const scrollToMock = jest.fn()
    window.scrollTo = scrollToMock
  })

  test('returns the correct scroll position for window object', () => {
    // expect(getScrollPosition(window)).toEqual({ left: 0, top: 0 })
    window.scrollTo(500, 500)
    // expect(getScrollPosition(window)).toEqual({ left: 500, top: 500 })
    window.scrollTo(0, 0)
  })

  test('returns the correct scroll position for document object', () => {
    expect(getScrollPosition(document)).toEqual({ left: 0, top: 0 })
    window.scrollTo(500, 500)
    // expect(getScrollPosition(document)).toEqual({ left: 500, top: 500 })
    window.scrollTo(0, 0)
  })

  test('returns the correct scroll position for HTML element', () => {
    const element = document.createElement('div')
    element.style.overflow = 'scroll'
    element.style.width = '100px'
    element.style.height = '100px'
    element.innerHTML = "<div style='width: 200px; height: 200px;'></div>"
    document.body.appendChild(element)

    expect(getScrollPosition(element)).toEqual({ left: 0, top: 0 })
    element.scrollTop = 50
    element.scrollLeft = 50
    expect(getScrollPosition(element)).toEqual({ left: 50, top: 50 })

    document.body.removeChild(element)
  })
})
