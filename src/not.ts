import type { Predicate } from './prelude.js'

/** @returns negated predicate. */
const not: <T>(f: Predicate<T>) => Predicate<T> =
  <T>(f: Predicate<T>) =>
    (a: T) =>
      !f(a)

export default not
