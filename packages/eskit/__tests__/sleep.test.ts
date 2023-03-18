import { sleep } from '../src'
describe('sleep', () => {
  test('default', async () => {
    const fn = jest.fn()
    fn()
    await sleep(300)
    fn()
    expect(fn).toBeCalledTimes(2)
  })
})
