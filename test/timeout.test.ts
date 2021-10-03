import * as F from '../index.js'

test('timeout', async () => {

  expect(F.timeout(0.1 * 1000, () => F.sleep(1000).then(() => true), F.noop))
    .resolves.toBe(undefined)

  expect(F.timeout(0.1 * 1000, () => F.sleep(1000).then(() => true), () => { throw new Error('Timeout.') }))
    .rejects.toThrow('Timeout.')

})
