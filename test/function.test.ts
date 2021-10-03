import * as F from '../index.js'

test('throttle', async () => {
  const xs: number[] = []
  const push = () => {
    xs.push(Math.random())
  }
  const push_ = F.throttle(1000, push)
  const id = setInterval(() => {
    push_()
  }, 100)
  await F.sleep(3.5 * 1000)
  clearInterval(id)
  expect(xs.length).toBe(4)
  await F.sleep(1000)
  expect(xs.length).toBe(5)
})

test('timeout', async () => {

  expect(F.timeout(0.1 * 1000, () => F.sleep(1000).then(() => true), F.noop))
    .resolves.toBe(undefined)

  expect(F.timeout(0.1 * 1000, () => F.sleep(1000).then(() => true), () => { throw new Error('Timeout.') }))
    .rejects.toThrow('Timeout.')

})
