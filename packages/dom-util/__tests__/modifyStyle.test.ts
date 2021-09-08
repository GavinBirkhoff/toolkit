import { modifyStyle } from '../src'

describe('modifyStyle', () => {
  test('default', () => {
    const domDiv = document.createElement('div')
    modifyStyle(domDiv, { display: 'none' })
    expect(domDiv.style.display).toBe('none')
  })
})
