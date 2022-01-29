import type { Predicate } from './prelude.js'

const xor =
  <A, B>(a: Predicate<A>, b: Predicate<B>) =>
    (value: A & B) =>
      a(value) ?
        b(value) ?
          true :
          false :
        b(value) ?
          false :
          true

export default xor
