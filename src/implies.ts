import type { Predicate } from '.'

const implies =
  <T, U>(a: Predicate<T>, b: Predicate<U>) =>
    (value: T & U) =>
      a(value) ?
        b(value) :
        true

export default implies
