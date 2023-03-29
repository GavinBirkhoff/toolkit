import { removeDom } from '../src'

describe('removeDom', () => {
  it('should remove the element from the document', () => {
    // Create a new div element
    const el = document.createElement('div')

    // Set the id of the div element to "test"
    el.id = 'test'

    // Append the div element to the document body
    document.body.appendChild(el)

    // Ensure that the div element is in the document
    expect(document.querySelector('#test')).not.toBeNull()

    // Remove the div element using removeDom
    removeDom(el)

    // Ensure that the div element has been removed from the document
    expect(document.querySelector('#test')).toBeNull()
  })
})
