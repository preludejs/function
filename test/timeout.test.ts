import * as F from '../index.js'

test('timeout', async () => {

  expect(F.timeout(0.1 * 1000, () => F.sleep(1000).then(() => true), F.noop))
    .resolves.toBe(undefined)

  expect(F.timeout(0.1 * 1000, () => F.sleep(1000).then(() => true), () => { throw new Error('Timeout.') }))
    .rejects.toThrow('Timeout.')

})

test('special timeout', async () => {

  expect(
    F.timeout(
      0.1 * 1000,
      () => F.sleep(0.2 * 1000).then(() => true),
      () => F.sleep(0.3 * 1000).then(() => { throw Error('Actually reject.') })
    )
  ).rejects.toThrow('Actually reject.')

})
