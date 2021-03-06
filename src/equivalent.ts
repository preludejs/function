import type { Predicate } from './prelude.js'

/** @returns boolean logic equivalence from provided predicates. */
const equivalent =
  <A, B>(a: Predicate<A>, b: Predicate<B>) =>
    (value: A & B) =>
      a(value) ?
        b(value) ?
          true :
          false :
        b(value) ?
          false :
          true

export default equivalent
