import { getRandomInt } from '../src/'

describe('getRandomInt', () => {
  test('Get a random number from 1 to 5', () => {
    for (let i = 0; i < 100; i++) {
      const num = getRandomInt(1, 5)
      expect(num >= 1 && num <= 5).toBeTruthy()
    }
  })
})
