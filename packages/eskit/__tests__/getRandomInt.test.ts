import { getRandomInt } from '../src/'

test('getRandomInt returns a random integer between the specified minimum and maximum values', () => {
  const min = 1
  const max = 10
  const randomInt = getRandomInt(min, max)

  expect(randomInt).toBeGreaterThanOrEqual(min)
  expect(randomInt).toBeLessThanOrEqual(max)
  expect(Number.isInteger(randomInt)).toBe(true)
})
