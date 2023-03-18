import { isArguments } from '../src'
describe('isArguments', () => {
  test('default', () => {
    ;(function () {
      // eslint-disable-next-line prefer-rest-params
      expect(isArguments(arguments)).toBeTruthy()
    })()
  })
})
