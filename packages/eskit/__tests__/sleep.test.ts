import { sleep } from '../src'
describe('sleep', () => {
  it('should resolve after the specified time has elapsed', async () => {
    const start = Date.now()
    await sleep(1000)
    const elapsed = Date.now() - start
    expect(elapsed).toBeGreaterThanOrEqual(1000)
    expect(elapsed).toBeLessThanOrEqual(1100)
  })
})
