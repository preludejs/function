import * as A from '@prelude/array'
import * as F from '../cjs/index.js'

test('serial', async () => {
  const xs: number[] = []

  const f =
    (x: number) =>
      F.sleep(Math.random() * 100).then(() => { xs.push(x) })

  const g = F.serial(f)

  for (let i = 0; i < 100; i++) {
    g(i)
    await F.sleep(Math.random() * 10)
  }

  await F.eventually(async () => xs.length === 100)

  expect(xs).toEqual(A.indices(100))
}, 10 * 1000)
