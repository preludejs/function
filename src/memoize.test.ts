import * as F from './index.js'

const factorial =
  F.memoize((n: number): bigint =>
    n === 1 ?
      1n :
      BigInt(n) * factorial(n - 1)
  )

test('memoize', () => {
  expect(factorial(100)).toMatchSnapshot()
  expect(factorial.cache).toMatchSnapshot()
})
